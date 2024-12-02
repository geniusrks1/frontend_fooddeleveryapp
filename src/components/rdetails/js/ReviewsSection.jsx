import styles from '../styles/ReviewsSection.module.css';

const ReviewsSection = () => {
  const reviews = [
    { user: 'ST, London', date: '21st Sept', review: 'Great service and taste!' },
  ];

  return (
    <section className={styles.reviewsSection}>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <p>{review.review}</p>
          <p>{review.user} - {review.date}</p>
        </div>
      ))}
    </section>
  );
};

export default ReviewsSection;
