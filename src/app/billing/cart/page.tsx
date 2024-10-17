"use client"

import { useState, useEffect } from "react";
import { loadStripe, StripeElementLocale } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, Appearance } from "@stripe/stripe-js";

import CheckoutForm from "@/components/blocks/checkout/Form";
import CompletePage from "@/components/blocks/checkout/Complete";
import { useLocale } from "next-intl";

export default function Cart() {
    const locale = useLocale() as StripeElementLocale;
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!, {
        locale: locale,
    });
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [amount, setAmount] = useState<string | null>(null);
    const [confirmed, setConfirmed] = useState<boolean>(false);

    useEffect(() => {
        const paymentIntentClientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
        if (paymentIntentClientSecret) {
            setConfirmed(true);
        }
    }, []);

    useEffect(() => {
        fetch("/api/stripe/genPaymentIntent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to create payment intent");
            }
            return res.json();
        })
        .then((data) => {
            setClientSecret(data.clientSecret);
            setAmount(data.amount)
        })
        .catch((error) => {
            console.error("Error fetching payment intent:", error);
        });
    }, []);

    const appearance: Appearance = {
        theme: 'flat',
        variables: {
          colorPrimary: '#393cb9',
          colorText: '#ffffff',
          colorBackground: '#475569',
          borderRadius: '6px',
        },
      };

    // Options for the Elements component
    const options: StripeElementsOptions | undefined = clientSecret ? {
        clientSecret,
        appearance,
    } : undefined;
    
    return (
        <main>
            {clientSecret && (
                <>
                    <Elements options={options} stripe={stripePromise}>
                        {confirmed ? <CompletePage /> : <CheckoutForm amount={amount} />}
                    </Elements>
                </>
            )}
        </main>
    );
}
