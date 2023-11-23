import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const { empid, menuType } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/${menuType}/${empid}`)
      .then((res) => res.json())
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid, menuType]);

  return (
    <div>
      <div className="container" style={{fontFamily:"Agbalumo"}}>
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>
              <big>
                <b>Menu Details</b>
              </big>
            </h2>
          </div>
          <div className="card-body"></div>

          {empdata && (
            <div>
              <h2>Title : <b>{empdata.title}</b></h2>
              <h3>Menu Details</h3>
              <h5>Special:{empdata.special}</h5>
              <h5>M1: {empdata.m1}</h5>
              <h5>M2: {empdata.m2}</h5>
              <h5>M3: {empdata.m3}</h5>
              <h5>M4: {empdata.m4}</h5>
              <Link className="btn btn-danger" to="/">
                Back to the main page
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;
