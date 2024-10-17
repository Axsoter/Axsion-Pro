import { useState, useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";

const STATUS_CONTENT_MAP: {
  [key: string]: {
    text: string;
    iconColor: string;
  };
} = {
  succeeded: {
    text: "Payment succeeded",
    iconColor: "#30B130",
  },
  processing: {
    text: "Your payment is processing.",
    iconColor: "#6D6E78",
  },
  requires_payment_method: {
    text: "Your payment was not successful, please try again.",
    iconColor: "#DF1B41",
  },
  default: {
    text: "Something went wrong, please try again.",
    iconColor: "#DF1B41",
  },
};


// WIP, COPIED FROM STRIPE DOCS
export default function CompletePage() {
  const stripe = useStripe();
  const [status, setStatus] = useState<string>("default");
  const [intentId, setIntentId] = useState<string | null>(null);

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) return;

    const retrievePaymentIntent = async () => {
      const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);
      if (!paymentIntent) return;

      setStatus(paymentIntent.status || "default");
      setIntentId(paymentIntent.id || null);
    };

    retrievePaymentIntent();
  }, [stripe]);

  const currentStatus = STATUS_CONTENT_MAP[status] || STATUS_CONTENT_MAP["default"];

  return (
    <div id="payment-status">
      <h2 id="status-text">{currentStatus.text}</h2>
      {intentId && (
        <div id="details-table">
          <table>
            <tbody>
              <tr>
                <td className="TableLabel">id</td>
                <td id="intent-id" className="TableContent">{intentId}</td>
              </tr>
              <tr>
                <td className="TableLabel">status</td>
                <td id="intent-status" className="TableContent">{status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {intentId && (
        <a
          href={`https://dashboard.stripe.com/payments/${intentId}`}
          id="view-details"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stripe link
        </a>
      )}
      <a id="retry-button" href="/billing/cart">Test another</a>
    </div>
  );
}
