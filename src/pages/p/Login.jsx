// src/pages/p/Login.jsx
import React, { useState } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/users/login", { email, password });
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
