import React from 'react';
import styles from './Stats.module.css';

const Stats = () => {
  const stats = [
    { id: 1, value: '546+', label: 'Registered Riders' },
    { id: 2, value: '789,900+', label: 'Orders Delivered' },
    { id: 3, value: '690+', label: 'Restaurants Partnered' },
    { id: 4, value: '17,457+', label: 'Food Items' },
  ];

  return (
    <section className={styles.stats}>
      {stats.map((stat) => (
        <div key={stat.id} className={styles.stat}>
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
