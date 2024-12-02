// src/pages/p/Checkout.jsx
import React, { useState } from "react";
import api from "../../utils/api";

const Checkout = () => {
  const [deliveryOption, setDeliveryOption] = useState("door");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleCheckout = async () => {
    try {
      const response = await api.post("/checkout", {
        deliveryOption,
        paymentMethod,
      });
      alert(`Order placed successfully! Order ID: ${response.data.orderId}`);
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Failed to complete the checkout process.");
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div>
        <h3>Delivery Options</h3>
        <label>
          <input
            type="radio"
            value="door"
            checked={deliveryOption === "door"}
            onChange={() => setDeliveryOption("door")}
          />
          Door Delivery
        </label>
        <label>
          <input
            type="radio"
            value="pickup"
            checked={deliveryOption === "pickup"}
            onChange={() => setDeliveryOption("pickup")}
          />
          Pick Up
        </label>
      </div>
      <div>
        <h3>Payment Methods</h3>
        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          Card
        </label>
        <label>
          <input
            type="radio"
            value="bank"
            checked={paymentMethod === "bank"}
            onChange={() => setPaymentMethod("bank")}
          />
          Bank Account
        </label>
      </div>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;
