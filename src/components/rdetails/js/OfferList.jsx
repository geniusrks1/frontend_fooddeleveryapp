import React from "react";
import styles from "../styles/OffersSection.module.css";

const offers = [
  {
    image: "https://via.placeholder.com/300x200", // Replace with real image URL
    discount: 20,
    restaurantName: "McDonald's",
    dishName: "Cheeseburger",
  },
  {
    image: "https://via.placeholder.com/300x200",
    discount: 30,
    restaurantName: "Burger King",
    dishName: "Whopper Meal",
  },
  {
    image: "https://via.placeholder.com/300x200",
    discount: 50,
    restaurantName: "Subway",
    dishName: "Veggie Delight",
  },
  {
    image: "https://via.placeholder.com/300x200",
    discount: 15,
    restaurantName: "KFC",
    dishName: "Chicken Wings",
  },
];

const OffersList = () => {
  return (
    <div className={styles.offersSection}>
      <div className={styles.offersGrid}>
        {offers.map((offer, index) => (
          <div key={index} className={styles.card}>
            <img
              src={offer.image}
              alt={`${offer.dishName}`}
              className={styles.cardImage}
            />
            <div className={styles.discountBadge}>{offer.discount}% OFF</div>
            <div className={styles.cardFooter}>
              <div className={styles.cardDetails}>
                <h4 className={styles.restaurantName}>
                  {offer.restaurantName}
                </h4>
                <p className={styles.dishName}>{offer.dishName}</p>
              </div>
              <button className={styles.addButton}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersList;
