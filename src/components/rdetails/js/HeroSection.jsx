import React from "react";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>McDonald's East London</h1>
        <p className={styles.subtitle}>
          Minimum Order: £0 | Delivery in 20–35 minutes
        </p>
        <div className={styles.rating}>
          <span className={styles.ratingValue}>3.4</span>
          <p className={styles.reviews}>(1200 reviews)</p>
        </div>
        <button className={styles.openNow}>Open until 3:30 AM</button>
      </div>
      <div className={styles.heroImage}>
        <img
          src="https://via.placeholder.com/300x200.png" /* Replace with the correct image URL */
          alt="Burger and Fries"
        />
      </div>
    </section>
  );
};

export default HeroSection;
