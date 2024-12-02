import React from 'react';
import styles from './DealsSection.module.css';

const DealsSection = () => {
  return (
    <div className={styles.dealsSection}>
      {/* Header and Filter Buttons */}
      <div className={styles.header}>
        <h2>
          Up to <span>-40%</span> 🎉 Order.uk Exclusive Deals
        </h2>
        <div className={styles.filters}>
          <button className={`${styles.filterButton} ${styles.active}`}>Vegan</button>
          <button className={styles.filterButton}>Sushi</button>
          <button className={styles.filterButton}>Pizza & Fast Food</button>
          <button className={styles.filterButton}>Others</button>
        </div>
      </div>

      {/* Deal Cards */}
      <div className={styles.deals}>
        {/* Dummy Deal Cards */}
        {[
          {
            image: "https://via.placeholder.com/150",
            discount: "-40%",
            name: "Chef Burgers London",
          },
          {
            image: "https://via.placeholder.com/150",
            discount: "-35%",
            name: "Grand Al Cafe London",
          },
          {
            image: "https://via.placeholder.com/150",
            discount: "-17%",
            name: "Butterbrot Cafe London",
          },
        ].map((deal, index) => (
          <div className={styles.dealCard} key={index}>
            <div className={styles.discount}>{deal.discount}</div>
            <img src={deal.image} alt={deal.name} />
            <h3>{deal.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
