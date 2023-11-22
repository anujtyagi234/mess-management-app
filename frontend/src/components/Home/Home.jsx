import React from "react";
import homePng from "../../Images/Back4.png";

const Home = () => {
  return (
    <>
  
      <div
        className="flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${homePng})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", // Set a minimum height to cover the entire viewport
          color: "white", // Text color
        }}
      >
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda repudiandae obcaecati deleniti?</p>
      </div>
    </>
  );
};

export default Home;
