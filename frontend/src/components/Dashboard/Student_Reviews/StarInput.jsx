import React from 'react';

function StarInput({ handleStarChange }) {
  return (
    <div>
      {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
        <div key={dayIndex}>
          <span>{getDayName(dayIndex)}</span>
          <input
            type="number"
            min="0"
            max="5"
            onChange={(e) => handleStarChange(dayIndex, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

function getDayName(dayIndex) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[dayIndex];
}

export default StarInput;
