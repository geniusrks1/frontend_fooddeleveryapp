import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/images/logo.png" alt="Order.UK Logo" />
      </div>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Browse Menu</a>
        <a href="#">Special Offers</a>
        <a href="#">Restaurants</a>
        <a href="#">Track Order</a>
      </nav>
      <div className={styles.actions}>
        <button className={styles.loginButton}>Login/Signup</button>
      </div>
    </header>
  );
};

export default Header;
