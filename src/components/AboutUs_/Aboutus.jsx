
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={styles.AboutUs}>
      <div className={styles.heroContent}>
        <h1>
          Ordering is more <span className={styles.highlight}>Personalised</span> & Instant
        </h1>
        <p>Download the Order.uk app for faster ordering</p>
        <div className={styles.appLinks}>
          <img src="/images/appstore.png" alt="Download on App Store" />
          <img src="/images/googleplay.png" alt="Get it on Google Play" />
        </div>
      </div>
      <div className={styles.partnerOptions}>
        <div className={styles.partnerCard}>
          <h3>Earn more with lower fees</h3>
          <button className={styles.partnerButton}>Partner with us</button>
        </div>
        <div className={styles.partnerCard}>
          <h3>Avail exclusive perks</h3>
          <button className={styles.partnerButton}>Ride with us</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
