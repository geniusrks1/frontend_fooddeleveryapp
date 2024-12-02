import React from 'react';
import styles from './Categories.module.css';

const Categories = () => {
  return (
    <div className={styles.Categories}>
      <h2 className={styles.heading}>Order.uk Popular Categories 🍔</h2>
      <div className={styles.categories}>
        {[
          { name: "Burgers & Fast Food", count: "21 restaurants", image: "https://via.placeholder.com/150" },
          { name: "Salads", count: "32 restaurants", image: "https://via.placeholder.com/150" },
          { name: "Pasta & Casuals", count: "4 restaurants", image: "https://via.placeholder.com/150" },
          { name: "Pizza", count: "52 restaurants", image: "https://via.placeholder.com/150" },
          { name: "Breakfast", count: "4 restaurants", image: "https://via.placeholder.com/150" },
          { name: "Soups", count: "32 restaurants", image: "https://via.placeholder.com/150" },
        ].map((category, index) => (
          <div className={styles.categoryCard} key={index}>
            <img src={category.image} alt={category.name} className={styles.categoryImage} />
            <h3 className={styles.categoryName}>{category.name}</h3>
            <p className={styles.restaurantCount}>{category.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;



