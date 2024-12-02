import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.logo}>Order</div>
        <div className={styles.navLinks}>
          <a href="/">Special Offers</a>
          <a href="/">Restaurants</a>
          <a href="/">Track Order</a>
          <a href="/">Hey Mike</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
