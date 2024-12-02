import React from 'react';
import styles from './PopularRestaurants.module.css';
import {Link} from 'react-router-dom'

const PopularRestaurants = () => {
  const restaurants = [
    { id: 1, name: "McDonald's London", logo: '/assets/images/mcdonalds.png' },
    { id: 2, name: 'Papa Johns', logo: '/assets/images/papajohns.png' },
    { id: 3, name: 'KFC West London', logo: '/assets/images/kfc.png' },
    { id: 4, name: 'Texas Chicken', logo: '/assets/images/texaschicken.png' },
    { id: 5, name: 'Burger King', logo: '/assets/images/burgerking.png' },
  ];

  return (
    <section className={styles.restaurants}>
      <h2>Popular Restaurants</h2>
      <div className={styles.grid}>
        {restaurants.map((resto) => (
          <div key={resto.id} className={styles.card}>
          <Link to='restaurant'>  <img src={resto.logo} alt={resto.name} /></Link>
            <p>{resto.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRestaurants;
