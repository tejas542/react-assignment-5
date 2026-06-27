import React, { useState } from "react";

function FeedbackCollector() {
  const [feedback, setFeedback] = useState("");
  const [count, setCount] = useState(0);

  const handleFeedback = (type) => {
    setFeedback(type);
    setCount(count + 1);
  };

  const getMessage = () => {
    if (feedback === "Good") {
      return "Thank you for your positive feedback!";
    } else if (feedback === "Average") {
      return "We'll try to improve.";
    } else if (feedback === "Poor") {
      return "Sorry for the inconvenience.";
    }
    return "";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Feedback Collector</h2>

      <button onClick={() => handleFeedback("Good")}>😊 Good</button>
      <button onClick={() => handleFeedback("Average")}>😐 Average</button>
      <button onClick={() => handleFeedback("Poor")}>😞 Poor</button>

      <h3>Selected Feedback: {feedback}</h3>
      <h3>Total Feedback Given: {count}</h3>

      <p>{getMessage()}</p>
    </div>
  );
}

export default FeedbackCollector;