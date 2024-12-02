import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
       <h2>Know more about us!</h2>
      {/* Top Navigation Options */}
      <div className={styles.navOptions}>
        <button className={styles.activeOption}>Frequent Questions</button>
        <button>Who we are?</button>
        <button>Partner Program</button>
        <button>Help & Support</button>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
       
        <div className={styles.questions}>
          <div className={styles.question}>
            <h3>How does Order.UK work?</h3>
            <div className={styles.steps}>
              <div className={styles.step}>
                <img src="/images/place-order-icon.png" alt="Place an Order" />
                <p>Place an order through our website or mobile app.</p>
              </div>
              <div className={styles.step}>
                <img src="/images/track-progress-icon.png" alt="Track Progress" />
                <p>Track your order with delivery time.</p>
              </div>
              <div className={styles.step}>
                <img src="/images/get-order-icon.png" alt="Get Your Order" />
                <p>Receive your order at lightning-fast speed!</p>
              </div>
            </div>
          </div>
          <div className={styles.question}>
            <h3>What payment methods are accepted?</h3>
            <p>We accept all major credit/debit cards, PayPal, and digital wallets like Apple Pay and Google Pay.</p>
          </div>
          <div className={styles.question}>
            <h3>Can I track my order in real-time?</h3>
            <p>Yes, you can track your order status in real-time through our app or website.</p>
          </div>
          <div className={styles.question}>
            <h3>Are there any special discounts or promotions available?</h3>
            <p>Yes, we regularly offer exclusive discounts and deals. Check our app for the latest promotions.</p>
          </div>
          <div className={styles.question}>
            <h3>Is Order.UK available in my area?</h3>
            <p>You can enter your postcode on our app or website to check availability in your area.</p>
          </div>
        </div>
        <p className={styles.aboutText}>
          Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
