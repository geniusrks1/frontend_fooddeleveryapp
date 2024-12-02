import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/p/Home";
import Login from "./pages/p/Login";
import Register from "./pages/p/Register";
import ProductDetails from "./pages/p/ProductDetails";
import Cart from "./components/c/Cart";
import SharedCart from "./components/c/SharedCart";
import Checkout from "./pages/p/Checkout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shared-cart/:token" element={<SharedCart />} />
      </Routes>
    </Router>
  );
};

export default App;
