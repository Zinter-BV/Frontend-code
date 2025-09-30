import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { createPayment } from "../api/tracking";

// Load your publishable key (from Stripe Dashboard)
const stripePromise = loadStripe("...");

const Stripe = () => {
    const [amount, setAmount] = useState("");

    const handleCheckout = async () => {
        try {
            const response = await createPayment(amount);

            if (response.clientSecret) {
                const stripe = await stripePromise;

                const { error } = await stripe.redirectToCheckout({
                    clientSecret: response.clientSecret,
                });

                if (error) {
                    console.error("Stripe Checkout error:", error);
                }
            }
        } catch (error) {
            console.log("Checkout failed:", error);
        }
    };




    return (
        <div className="container_stripe">
            <div>
                <input
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button onClick={handleCheckout}>BUY NOW</button>
            </div>
        </div>
    );
};

export default Stripe;
