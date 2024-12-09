import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import "./App.css";

function App() {
  const [countReviews, setCountReviews] = useState(() => {
    const val = JSON.parse(localStorage.getItem("countValue")) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    return val;
  });

  useEffect(() => {
    const stringifiedValue = JSON.stringify(countReviews);
    localStorage.setItem('countValue', stringifiedValue);
  }, [countReviews]);

  const resetBtn = () => {
    setCountReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const updateFeedback = feedbackType => {
    setCountReviews({
      ...countReviews,
      [feedbackType]: countReviews[feedbackType] + 1,
    });
  };
  const totalFeedback =
    countReviews.good + countReviews.neutral + countReviews.bad;

  const positiveReviews = Math.round((countReviews.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetBtn={resetBtn}
      />
      {totalFeedback > 0 ? (
        <Feedback reviews={countReviews} positiveReviews={positiveReviews} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
