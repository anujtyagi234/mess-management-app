import React from "react";
import homePng from "../../Images/Back4.png";

const Home = () => {
  return (
    <>
  
      <div
        className="flex flex-col items-center justify-center"
        style={{
          fontSize:"3rem",
          fontWeight:"bold",
          backgroundImage: `url(${homePng})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", // Set a minimum height to cover the entire viewport
          color: "white", // Text color
        }}
      >
        <p  className="animated-text " style={{marginLeft:"1.7rem"}}>Eat Healthy</p> 
        
        <p  className="animated-text"style={{marginLeft:"1.7rem"}}>Stay Healthy</p> 
      </div>
    </>
  );
};

export default Home;
