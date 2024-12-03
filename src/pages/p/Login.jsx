import React, { useState } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import styles from "./styles/Login.module.css";

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
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginForm}>
          <h2>Welcome Back 👋</h2>
          <p>
            Today is a new day. It's your day. You shape it. Sign in to start
            ordering.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign in</button>
          </form>
          <p>
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src="./images/Art.png" alt="Delicious food" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
