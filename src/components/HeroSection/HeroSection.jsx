import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      {/* Left Content */}
      <div className={styles.left}>
        <h1>
          Feast Your Senses, <br />
          <span>Fast and Fresh</span>
        </h1>
        <p>Order restaurant food, takeaway, and groceries.</p>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="e.g. ECA-3TE"
          />
          <button>Search</button>
        </div>
      </div>

      {/* Right Content */}
      <div className={styles.right}>
        <img
          src="https://via.placeholder.com/400x400" // Replace with real image later
          alt="Hero Section"
        />

        {/* Numbered Messages */}
        <div className={styles.messages}>
          <div className={`${styles.messageCard} ${styles.card1}`}>
            <span className={styles.number}>1</span>
            <span>We’ve received your order</span>
          </div>
          <div className={`${styles.messageCard} ${styles.card2}`}>
            <span className={styles.number}>2</span>
            <span>Your order is being prepared</span>
          </div>
          <div className={`${styles.messageCard} ${styles.card3}`}>
            <span className={styles.number}>3</span>
            <span>Your rider is on the way</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
