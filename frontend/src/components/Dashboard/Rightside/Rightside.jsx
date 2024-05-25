import React from "react";
import "./Rightside.css";

import Updates from "../Updates/Updates";

import StudentReviews from "../Student_Reviews/StudentR";
function Rightside() {
  return (
    <div className="Rightside">
      <div className="Updates">
        <Updates />
      </div>
      <div className="Studentreview">
        <StudentReviews />
      </div>
    </div>
  );
}
export default Rightside;
