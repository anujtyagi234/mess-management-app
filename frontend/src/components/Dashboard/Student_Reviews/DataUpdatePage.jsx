import React, { useState } from 'react';

function RateUs({ updateChartData }) {
  const [stars, setStars] = useState(0);

  const handleStarChange = (e) => {
    setStars(Number(e.target.value));
  };

  const handleSubmit = () => {
    // Log the selected stars
    console.log('Submit button clicked');
    console.log(`User rated ${stars} stars`);

    // Send the selected stars back to the parent window
    window.opener.postMessage(stars, window.location.origin);

    // Call the function to update chart data
    // Ensure that updateChartData is a function before calling it
    if (typeof updateChartData === 'function') {
      updateChartData(stars);
    }

    // Close the RateUs window
    window.close();
  };

  return (
    <div className='RateUs'>
      <h2 className='rateus-title'>Rate Us</h2>
      <p>Select the number of stars:</p>
      <input
        type="number"
        min="0"
        max="5"
        value={stars}
        onChange={handleStarChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default RateUs;
