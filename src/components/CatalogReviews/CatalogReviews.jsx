import reviewsCss from './MovieReviews.module.css';
import ReviewCard from '../ReviewCard/ReviewCard';

const CatalogReviews = ({ reviews }) => {
  return (
    <>
      <ul className={reviewsCss.list}>
        {reviews.map(review => (
          <li key={review.id} className={reviewsCss.cardWrapper}>
            <ReviewCard />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CatalogReviews;
