import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Footer Content */}
      <div className={styles.footerContent}>
        {/* Footer Left Section */}
        <div className={styles.footerLeft}>
          <img
            src="./images/logo.png"
            alt="Order.uk Logo"
            className={styles.logo}
          />
          <div className={styles.storeLinks}>
            <img src="./images/appstore.png" alt="App Store" />
            <img src="./images/playstore.png" alt="Google Play" />
          </div>
          <p className={styles.companyInfo}>
            Company # 490039-445, Registered with House of Companies.
          </p>
        </div>

        {/* Footer Right Section */}
        <div className={styles.footerRight}>
          {/* Column 1 - Deals */}
          <div className={styles.footerColumn}>
            <h3>Get Exclusive Deals in your Inbox</h3>
            <div className={styles.emailInput}>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className={styles.inputField}
              />
              <button className={styles.subscribeButton}>Subscribe</button>
            </div>
            <p className={styles.policyText}>
              We won’t spam, read our{" "}
              <Link to="/email-policy" className={styles.link}>
                email policy
              </Link>
              .
            </p>
            <div className={styles.socialIcons}>
              <Link to="#">
                <img src="./images/Facebook.png" alt="Facebook" />
              </Link>
              <Link to="#">
                <img src="./images/Instagram.png" alt="Instagram" />
              </Link>
              <Link to="#">
                <img src="./images/TikTok.png" alt="TikTok" />
              </Link>
              <Link to="#">
                <img src="./images/Snapchat.png" alt="Snapchat" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Legal Pages */}
          <div className={styles.footerColumn}>
            <h3>Legal Pages</h3>
            <ul className={styles.linkList}>
              <li>
                <Link to="/terms" className={styles.link}>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className={styles.link}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className={styles.link}>
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/modern-slavery" className={styles.link}>
                  Modern Slavery Statement
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Important Links */}
          <div className={styles.footerColumn}>
            <h3>Important Links</h3>
            <ul className={styles.linkList}>
              <li>
                <Link to="/help" className={styles.link}>
                  Get Help
                </Link>
              </li>
              <li>
                <Link to="/add-restaurant" className={styles.link}>
                  Add your Restaurant
                </Link>
              </li>
              <li>
                <Link to="/sign-up-deliver" className={styles.link}>
                  Sign Up to Deliver
                </Link>
              </li>
              <li>
                <Link to="/create-business" className={styles.link}>
                  Create a Business Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className={styles.footerBottom}>
        <p>© Order.uk Copyright 2024, All Rights Reserved.</p>
        <ul className={styles.footerLinks}>
          <li>
            <Link to="/privacy" className={styles.link}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className={styles.link}>
              Terms
            </Link>
          </li>
          <li>
            <Link to="/pricing" className={styles.link}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/do-not-sell" className={styles.link}>
              Do Not Sell or Share My Personal Information
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
