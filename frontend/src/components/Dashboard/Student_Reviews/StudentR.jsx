   
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './StudentR.css'; // Import the CSS file for styling
import { toast } from 'react-toastify';


const App = () => {
  const [ratings, setRatings] = useState([]);
  const [ratingPage, setRatingPage] = useState(true);
  const [currentRating, setCurrentRating] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const onSubmitRating = () => {
    if (currentRating == null) {
      toast.error("Please select atleast one star ⭐");
    } else {
      const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
      const existingRatingIndex = ratings.findIndex((rating) => rating.day === currentDay);
  
      if (existingRatingIndex !== -1) {
       toast.error("You have already rated today");
      } else {
        setRatings((prevRatings) => [...prevRatings, { day: currentDay, rating: currentRating }]);
        setRatingPage(false);
        setShowThankYou(true);
  
        // Hide the "thank you" message after 4 seconds
        setTimeout(() => {
          setShowThankYou(false);
        }, 3500);
      }
    }
  };
  
  const togglePage = () => {
    setRatingPage(!ratingPage);
  };

  const handleStarClick = (star) => {
    setCurrentRating(star);
  };

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const chartData = {
    labels: daysOfWeek,
    datasets: [
      {
        label: 'Average Rating',
        data: Array.from({ length: daysOfWeek.length }, (_, index) => {
          const dayData = ratings.find((rating) => rating.day === daysOfWeek[index]);
          return dayData ? dayData.rating : null;
        }),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)', // Add a background color for the line graph
        borderWidth: 2, // Set the width of the line
        pointRadius: 6, // Set the size of the points on the line
        pointBackgroundColor: 'rgba(75,192,192,1)', // Set the color of the points
      },
    ],
  };

  const chartOptions = {



    
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.2)', // Change x-axis grid line color to light gray
          borderColor: 'rgba(0, 0, 0, 0.2)', // Change x-axis grid border color to light gray
        },
        ticks: {
          color: 'black', // Change x-axis tick color to black
          font: {
            weight: 'bold', // Set font weight to bold
            family: 'cursive', // Set font family to cursive
          },
        },
      },
      y: {
        
          beginAtZero: false, // Set to false to start the y-axis from 1
          max: 6,             // Set the maximum value of the y-axis
          ticks: {
            stepSize: 1,      // Set the step size between ticks
          },
        
        grid: {
          color: 'rgba(0, 0, 0, 0.2)', // Change y-axis grid line color to light gray
          borderColor: 'rgba(0, 0, 0, 0.2)', // Change y-axis grid border color to light gray
        },
        ticks: {
          color: 'black', // Change y-axis tick color to black
          font: {
            weight: 'bold', // Set font weight to bold
            family: 'cursive', // Set font family to cursive
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'red',
   
          // Change color of legend text to black
          font: {
            weight: 'bold', // Set font weight to bold
            family: 'Agbalumo',
            // Set font family to cursive
          },
        },
      },
    },
  };

  return (
    <div className="app-container" style={{fontFamily:"Agbalumo",borderWidth:"0.07rem",borderColor:"black"}}>
      {ratingPage ? (
        <div className="rate-us-container"style={{background: 'linear-gradient(to right, pink, yellow, red)',borderWidth:"0.02rem",borderColor:"black"}}>
          <h1 style={{backgroundColor:"white",color:"white",backgroundColor:"black",   borderRadius:"50px",borderWidth:"1.5px",borderColor:"black",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold", marginBottom:"30px",fontSize:"1.3rem"}}>Rate Us</h1>
          <div className="stars-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleStarClick(star)}
                className={`star ${star <= currentRating ? 'active' : ''}`}
              >
                ⭐
              </span>

              
            ))}
          </div>

          <div className="response-box">{currentRating || 0}</div>
          <button onClick={onSubmitRating}>Submit</button>
         
        </div>
      ) : (
        <div className="graph-container">
         
          {ratings.length === 0 ? (
            <div>No Ratings Yet</div>
          ) : (
            <>
              <Line data={chartData} options={chartOptions} />
              {showThankYou && <div className="thank-you-message">🎉🌟 Thank you! 🌟🎉</div>}
              <button onClick={togglePage}>Rate Us</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
