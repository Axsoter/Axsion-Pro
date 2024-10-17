import { FormEvent, useState, useEffect } from "react";
import {
  PaymentElement,
  AddressElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions, StripeAddressElementOptions } from "@stripe/stripe-js";
import DefaultButton from "@/components/buttons/Default";
import { Session } from "@/components/buttons/NavLogin";
import ProgressBar, { Step } from "./Steps";

export default function CheckoutForm({amount}: {amount: string | null}) {
  const stripe = useStripe();
  const elements = useElements();

  const [session, setSession] = useState<Session | null>(null);
  const [message, setMessage] = useState<string | null | undefined>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const steps: Omit<Step, 'status'>[] = [
    { label: 'Info', icon: 'document' },
    { label: 'Payment', icon: 'document' },
    { label: 'Review', icon: 'lock' },
    { label: 'Finish', icon: 'lock' },
  ];

  const dynamicSteps: Step[] = steps.map((step, index) => ({
    ...step,
    status:
      index < stepIndex ? 'completed' : index === stepIndex ? 'active' : 'inactive',
  }));

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);

        try {
            const res = await fetch('/api/auth/session');
            const json = await res.json();
            setSession(json);
        } catch (error) {
            console.error('Error fetching session:', error);
        } finally {
            setIsLoading(false);
        }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log("test")
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:25572/billing/cart",
      },
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    } else {
      setMessage("Payment confirmation was successful.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
  };
  const addressElementOptions: StripeAddressElementOptions = {
    mode: "billing",
    defaultValues: {
      name: session?.user.name
    }
  }

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4">
        <div className="flex-grow flex flex-col gap-4">
          <div className="bg-defaultBg rounded-2xl px-6 py-5 border-2 border-dotted border-axsoterBlue">
            <div className="mb-4">
              <ProgressBar steps={dynamicSteps} />
            </div>

            <AddressElement options={addressElementOptions} className={stepIndex === 0 ? "block" : "hidden"} />
            <PaymentElement options={paymentElementOptions} className={stepIndex === 1 ? "block" : "hidden"} />

          </div>
          <div className="bg-defaultBg rounded-2xl px-6 py-5 border-2 border-dotted border-axsoterBlue">
              tänne ne tuotteet
          </div>
        </div>
        <div className="bg-defaultBg rounded-2xl px-6 py-5 border-2 border-dotted border-axsoterBlue lg:relative lg:w-[22rem] lg:h-[36rem] flex-shrink">
          <h2 className="text-xl font-bold">Overview:</h2>
          <div className="lg:absolute lg:bottom-5 lg:right-5 text-right flex flex-col">
            <div className="ml-auto flex flex-row gap-4">
              <button
                onClick={() => setStepIndex((prev) => Math.max(prev - 1, 0))}
                type="button"
                className={stepIndex === 0 ? "hidden" : "inline-block"}
              >
                <DefaultButton>
                  Go back
                </DefaultButton>
              </button>
              {
                stepIndex === 2 ? (
                  <button
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                    type="submit"
                    className="w-fit h-fit ml-auto"
                  >
                    <DefaultButton>
                      {isLoading ? "Loading..." : "Pay now"}
                    </DefaultButton>
                  </button>
                ) : (
                  <button
                    disabled={isLoading || !stripe || !elements}
                    type="button"
                    onClick={(e) => {
                      setIsLoading(true);
                      e.preventDefault();
                      setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
                      setIsLoading(false);
                    }}
                    className="w-fit h-fit ml-auto"
                  >
                    <DefaultButton>
                      {isLoading ? "Loading..." : "Continue"}
                    </DefaultButton>
                  </button>
                )
              }
            </div>
          </div>
        </div>
      </form>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </>
  );
}
