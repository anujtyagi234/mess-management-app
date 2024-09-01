import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './StudentR.css'; // Import the CSS file for styling
import { toast } from 'react-toastify';
import axios from 'axios';

const App = () => {
  const [ratings, setRatings] = useState([]);
  const [ratingPage, setRatingPage] = useState(true);
  const [currentRating, setCurrentRating] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [userRating, setUserRating] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch user's rating from the backend
    axios.get('http://localhost:3000/api/ratings/fetch/user', { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        setUserRating(response.data);
        setCurrentRating(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the user\'s rating!', error);
      });

    axios.get('http://localhost:3000/api/ratings/fetch', { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        console.log(response.data)
        setRatings(response.data.length > 0 ? response.data : null);
      })
      .catch((error) => {
        console.error('There was an error fetching the user rating!', error);
      });
  }, [token]);

  const today = new Date();
  const currentDay = today.toLocaleDateString('en-US', { weekday: 'long' });

  const onSubmitRating = () => {
    if (currentRating == null) {
      toast.error("Please select at least one star ⭐");
    } else {
      const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

      axios.post('http://localhost:3000/api/ratings/submit', { rating: currentRating }, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          console.log("submitted", response.data);
          const updatedRatings = [...ratings];
          const updatedRatingIndex = updatedRatings.findIndex(rating => rating.date === currentDay);
          updatedRatings[updatedRatingIndex].averageRating = response.data.averageRating;
          setRatings(updatedRatings);
          setShowThankYou(true);

          // Hide the "thank you" message after 4 seconds
          setTimeout(() => {
            setShowThankYou(false);
          }, 3500);

          // Toggle the rating page
          setRatingPage(false);
          // Reset currentRating after submitting
          setUserRating(currentRating);
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            toast.error("You have already rated today");
          } else {
            console.error('There was an error submitting the rating!', error);
          }
        });
    }
  };

  const togglePage = () => {
    setRatingPage(!ratingPage);
  };

  const handleStarClick = (star) => {
    if (!userRating) setCurrentRating(star);
  };

  // Prepare chart data
  const chartData = {
    labels: ratings.map(rating => rating.date),
    datasets: [
      {
        label: 'Average Rating',
        data: ratings.map(rating => rating.averageRating),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderWidth: 2,
        pointRadius: 6,
        pointBackgroundColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.2)',
          borderColor: 'rgba(0, 0, 0, 0.2)',
        },
        ticks: {
          color: 'black',
          font: {
            weight: 'bold',
            family: 'cursive',
          },
        },
      },
      y: {
        beginAtZero: false,
        max: 6,
        ticks: {
          stepSize: 1,
          color: 'black',
          font: {
            weight: 'bold',
            family: 'cursive',
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.2)',
          borderColor: 'rgba(0, 0, 0, 0.2)',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'red',
          font: {
            weight: 'bold',
            family: 'Agbalumo',
          },
        },
      },
    },
  };

  return (
    <div className="app-container" style={{ fontFamily: "Agbalumo", borderWidth: "0.07rem", borderColor: "black" }}>
      {ratingPage ? (
        <div className="rate-us-container" style={{ background: 'linear-gradient(to right, pink, yellow, red)', borderWidth: "0.02rem", borderColor: "black" }}>
          <h1 style={{ color: "white", borderRadius: "50px", borderWidth: "1.5px", borderColor: "black", height: "30px", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", marginBottom: "30px", fontSize: "1.3rem" }}>Rate Us</h1>
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
          <button className='mx-[6px]' onClick={togglePage}>Graph</button>
        </div>
      ) : (
        <div className="graph-container">
          {ratings.length === 0 ? (
            <div>No Ratings Yet</div>
          ) : (
            <>
              <Line data={chartData} options={chartOptions} />
              {showThankYou && <div className="thank-you-message">🎉🌟 Thank you ! 🌟🎉</div>}
              <button onClick={togglePage}>Rate Us</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;