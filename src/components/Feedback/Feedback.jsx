import style from "./Feedback.module.css";
const Feedback = ({ reviews, positiveReviews }) => {
  return (
    <ul>
      <li>Good: {reviews.good}</li>
      <li>Neutral: {reviews.neutral}</li>
      <li>Bad: {reviews.bad}</li>
      <li>Positive: {positiveReviews}%</li>
    </ul>
  );
};

export default Feedback;
