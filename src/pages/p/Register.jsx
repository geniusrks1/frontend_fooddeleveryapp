import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Register.module.css";
import Footer from "../../components/Footer/Footer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber || !password) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/register`,
        { name, email, phoneNumber, password }
      );
      alert("Registration successful!");
      console.log("Server Response:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      alert(`Registration failed: ${errorMessage}`);
    }
  };

  return (
    <>
    <div className={styles.registerContainer}>
      <div className={styles.registerForm}>
      <img src="./images/logo.png" alt="logo"/>
        <h2>Join Us 👋</h2>
        <p>Create an account to start your journey with us.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/">Sign in</a>
        </p>
      </div>
      <div className={styles.imageSection}>
        <img src="./images/Art.png" alt="Welcome" />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Register;
