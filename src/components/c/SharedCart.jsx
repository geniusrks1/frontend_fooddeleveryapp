// src/components/c/SharedCart.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";

const SharedCart = () => {
  const { token } = useParams();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchSharedCart = async () => {
      try {
        const response = await api.get(`/cart/shared/${token}`);
        setCartItems(response.data.items);
      } catch (error) {
        console.error("Error fetching shared cart:", error);
      }
    };

    fetchSharedCart();
  }, [token]);

  const handleUpdate = async (itemId, quantity) => {
    try {
      await api.put(`/cart/${itemId}`, { quantity });
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  return (
    <div className="shared-cart">
      <h2>Shared Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) => handleUpdate(item.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default SharedCart;
