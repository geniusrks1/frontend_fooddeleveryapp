// src/pages/p/ProductDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await api.post("/cart", {
        productId: product.id,
        quantity,
      });
      alert("Item added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Ingredients: {product.ingredients}</p>
      <p>Price: ${product.price}</p>
      <div>
        <label>Quantity: </label>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
