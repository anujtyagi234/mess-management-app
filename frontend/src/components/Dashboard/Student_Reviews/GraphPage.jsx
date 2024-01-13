import React from 'react';
import { Line } from 'react-chartjs-2';

const GraphPage = ({ ratings, onRateUsClick }) => {
  // Check if ratings is undefined or empty
  if (!ratings || ratings.length === 0) {
    return (
      <div className="graph-container">
        <h1>No Ratings Yet</h1>
        <button onClick={onRateUsClick}>Rate Us</button>
      </div>
    );
  }

  const data = {
    labels: Array.from({ length: ratings.length }, (_, i) => `Week ${i + 1}`),
    datasets: [
      {
        label: 'Average Rating',
        data: ratings,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="graph-container">
      <h1>Weekly Ratings Graph</h1>
      <Line data={data} />
      <button onClick={onRateUsClick}>Rate Us</button>
    </div>
  );
};

export default GraphPage;
