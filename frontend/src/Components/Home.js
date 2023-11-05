import React from "react";
import homePng from "../Images/background.png";

const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <img className="w-full h-auto" src={homePng} alt="" />
      </div>
    </>
  );
};

export default Home;
