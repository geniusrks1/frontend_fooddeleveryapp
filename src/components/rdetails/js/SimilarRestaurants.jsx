import styles from '../styles/SimilarRestaurants.module.css';

const SimilarRestaurants = () => {
  const restaurants = ['KFC', 'Burger King', 'Papa Johns'];

  return (
    <section className={styles.similarRestaurants}>
      {restaurants.map((restaurant, index) => (
        <div key={index} className={styles.restaurantCard}>
          {restaurant}
        </div>
      ))}
    </section>
  );
};

export default SimilarRestaurants;
