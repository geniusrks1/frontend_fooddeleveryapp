import { Link } from 'react-router-dom';
import styles from './register.module.css';

export default function Register() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted!");
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.heading}>Welcome Back 👋</h2>
      <p className={styles.subText}>
        Today is a new day. It's your day. You shape it.<br /> Sign in to start ordering.
      </p>

      <form className={styles.form} onSubmit={handleLogin}>
      <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>name</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Example@email.com"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Example@email.com"
            className={styles.input}
            required
          />
        </div>


        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Example@email.com"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="At least 8 characters"
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.signInButton}>Continue</button>
      </form>

      <p className={styles.signUpPrompt}>
        Already have an account? <Link to="../" className={styles.signUpLink}>Sign in</Link>
      </p>
    </div>
  );
}
