import React from "react";
import styles from "../styles/MenuSection.module.css";

const MenuSection = () => {
  const menuCategories = [
    { id: 1, title: "Offers", isActive: true },
    { id: 2, title: "Burgers", isActive: false },
    { id: 3, title: "Fries", isActive: false },
    { id: 4, title: "Snacks", isActive: false },
    { id: 5, title: "Cold Drinks", isActive: false },
    { id: 6, title: "Happy Meal", isActive: false },
    { id: 7, title: "Desserts", isActive: false },
    { id: 8, title: "Hot Drinks", isActive: false },
    { id: 9, title: "Sauces", isActive: false },
  ];

  return (
    <section className={styles.menuSection}>
      <div className={styles.header}>
        <h2>All Offers from McDonald’s East London</h2>
        <input
          type="text"
          placeholder="Search from menu..."
          className={styles.searchInput}
        />
      </div>

      <ul className={styles.menuTabs}>
        {menuCategories.map((category) => (
          <li
            key={category.id}
            className={`${styles.menuTab} ${
              category.isActive ? styles.active : ""
            }`}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuSection;
