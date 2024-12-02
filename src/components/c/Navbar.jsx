// src/components/common/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
