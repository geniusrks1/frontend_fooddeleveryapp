import React from 'react';
import styles from './OfferBanner.module.css';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Location icon
import { FaShoppingCart } from 'react-icons/fa'; // My Cart icon
import { FaChevronDown } from 'react-icons/fa'; // Dropdown arrow icon

const OfferBanner = () => {
  return (
    <div className={styles.banner}>
      {/* Offer Section */}
      <p>
        Get 5% off your first order, Promo: <span>ORDERS</span>
      </p>

      {/* Location and My Cart Section */}
      <div className={styles.rightSection}>
        {/* Location Section */}
        <div className={styles.location}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>Regent Street, A6, 4Z01, London</span>
          <FaChevronDown className={styles.dropdown} />
        </div>

        {/* My Cart Section */}
        <div className={styles.cart}>
          <FaShoppingCart className={styles.icon} />
          <span>My Cart</span>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
