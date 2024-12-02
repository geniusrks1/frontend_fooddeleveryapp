// src/components/c/Cart.jsx
import React, { useState, useEffect } from "react";
import api from "../../utils/api";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await api.get("/cart");
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemove = async (id) => {
    try {
      await api.delete(`/cart/${id}`);
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
