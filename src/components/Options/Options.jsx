
const Options = ({ updateFeedback, totalFeedback, resetBtn }) => {
  return (
    <div>
      <button type="button" onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button type="button" onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 ? (
        <button type="button" onClick={() => resetBtn()}>
          Reset
        </button>
      ) : null}
    </div>
  );
};

export default Options;
