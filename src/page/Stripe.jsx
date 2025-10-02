import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
import { createPayment } from "../api/tracking";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import PrimaryBtn from "../components/PrimaryBtn";
import { useDispatch } from "react-redux";
import { setPaymentStatus } from "../redux/action";

// Load your publishable key (from Stripe Dashboard)
// const stripePromise = loadStripe(
//   "pk_live_51O2JovLw5fKJMXx3q7cQnNGAODGP6tnY2OCoYlhBqMeBf1Fs8flni7lVj1INWbxjVAOzSFALiWhXBceYt9zTo64V00R9rtjcSH"
// );

const Stripe = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();

  const handleCheckout = async () => {
    //loading should be true
    try {
      const response = await createPayment(amount); // your backend call

      if (response.clientSecret && stripe && elements) {
        const { error, paymentIntent } = await stripe.confirmCardPayment(
          response.clientSecret,
          {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          }
        );
        // Stops the loader here if an error or successful
        if (error) {
          console.error("Payment failed:", error.message);
        } else if (paymentIntent.status === "succeeded") {
          console.log(" Payment successful!", paymentIntent);
          dispatch(setPaymentStatus());
        }
      }
    } catch (error) {
      console.log("Checkout failed:", error);
    }
  };

  return (
    <div className="container_stripe">
      <div>
        <div style={{ margin: "15px 0" }}>
          <CardElement />
        </div>
        {/* <button onClick={handleCheckout} disabled={!stripe}>
          BUY NOW
        </button> */}
        <div className="w-full">
          <PrimaryBtn
            handlePress={handleCheckout}
            className={"text-[14px] w-full mt-3 "}
          >
            Make payment
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Stripe;
