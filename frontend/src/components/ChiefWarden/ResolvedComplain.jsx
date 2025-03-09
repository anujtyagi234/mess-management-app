import React, { useState, useEffect } from "react";
import "./Common.css";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Student_complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    // Fetch complaints data from the backend when the component mounts
    axios
      .get("http://localhost:3000/api/fetchcomplaints", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { complaints: fetchedComplaints } = response.data;
        setComplaints(fetchedComplaints);
      })
      .catch((error) => {
        console.error("Error fetching complaints:", error);
      });
  }, []);

  // Check if complaints is an array before filtering
  const resolvedComplaints = Array.isArray(complaints)
    ? complaints.filter((complaint) => complaint.resolved)
    : [];
  console.log(resolvedComplaints);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="Maincontainer">
      <div className="comlainheading" style={{ fontFamily: "Agbalumo" }}>
        <h2
          style={{
            fontSize: "1.7rem",
            marginTop: "1.1rem",
            fontWeight: "bold",
            fontFamily: "Agbalumo",
          }}
        >
          <b>Students Complaints</b>
        </h2>
      </div>
      <div className="we123">
        <div className="deatailas_complain" style={{ fontFamily: "Agbalumo" }}>
          <ul>
            {resolvedComplaints.map((complaint) => (
              <li className="" key={complaint._id}>
                <h3>
                  <b>Subject: </b>
                  {complaint.title}
                </h3>
                <p>
                  <b>Description: </b>
                  {complaint.description}
                </p>
                <p>
                  <b>Created at: </b>
                  {new Date(complaint.createdAt).toLocaleString()}
                </p>
                <p>
                  <b>Likes: </b>
                  {complaint.likes}
                </p>
                <p>
                  <b>Dislike: </b>
                  {complaint.dislikes}
                </p>
                <p>
                  <b>ResolvedAt: </b>
                  {new Date(complaint.resolvedAt).toLocaleString()}
                </p>
                {complaint.images &&
                  Array.isArray(complaint.images) &&
                  complaint.images.length > 0 && (
                    <div style={{ marginBottom: "2rem", position: "relative" }}>
                    <Slider {...sliderSettings}>
                      {complaint.images.map((image, index) => (
                        <div key={index}>
                          <img
                            src={
                              image.startsWith("http")
                                ? image
                                : `http://localhost:3000/uploads/${image}`
                            }
                            alt={`Complaint ${index}`}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      ))}
                    </Slider>
                    </div>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Student_complaints;
