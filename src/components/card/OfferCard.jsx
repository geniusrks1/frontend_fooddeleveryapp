import React from "react";
import styles from "../styles/OfferCard.module.css";

const OfferCard = ({ image, discount, restaurantName, dishName }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={dishName} className={styles.image} />
        <span className={styles.discount}>{discount}%</span>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.info}>
          <h3 className={styles.restaurant}>{restaurantName}</h3>
          <p className={styles.dish}>{dishName}</p>
        </div>
        <div className={styles.addButton}>+</div>
      </div>
    </div>
  );
};

export default OfferCard;
