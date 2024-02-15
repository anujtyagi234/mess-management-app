import React, { useState } from 'react';

const RateUsPage = ({ onSubmitRating }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const submitRating = () => {
    if (rating > 0 && rating <= 5) {
      // Valid rating, submit it
      onSubmitRating(rating);
    } else {
      // Invalid rating, handle accordingly (show an error message, for example)
      console.error('Invalid rating. Please select a rating between 1 and 5.');
    }
  };

  return (
    <div className="rate-us-container">
      <h1>Rate Us</h1>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRatingChange(star)}
            style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
          >
            ⭐
          </span>
        ))}
      </div>
      <button onClick={submitRating}>Submit Rating</button>
    </div>
  );
};

export default RateUsPage;
