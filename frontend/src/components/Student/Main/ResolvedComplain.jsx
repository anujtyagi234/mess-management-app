import React, { useState, useEffect } from "react";
import "../../ChiefWarden/Common.css";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Student_complaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/fetchcomplaints", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    <div className="Maincontainer" style={{ fontFamily: "Agbalumo" }}>
      <div className="comlainheading" style={{ fontFamily: "Agbalumo" }}>
        <span>
          <h2
            style={{
              fontSize: "1.5rem",
              marginTop: "1.1rem",
              fontWeight: "bold",
            }}
          >
            <b>
              <span>Students Complaints </span>
            </b>
          </h2>
        </span>
      </div>
      <div className="deatailas_complain">
        <ul>
          {resolvedComplaints.map((complaint) => (
            <li key={complaint._id}>
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
                          src={ image.startsWith("http")
                            ? image
                            : `http://localhost:3000/uploads/${image}` }
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
  );
};

export default Student_complaints;
