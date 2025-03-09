import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Common.css";
import { toast } from "react-toastify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Chief_Student_complaints = () => {
  const [userActions, setUserActions] = useState({});
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

  const resolveComplaint = (complaintId) => {
    axios
      .put(`http://localhost:3000/api/${complaintId}/resolved`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const updatedComplaint = response.data;
        setComplaints((prevComplaints) =>
          prevComplaints.map((complaint) =>
            complaint._id === updatedComplaint._id
              ? updatedComplaint
              : complaint
          )
        );
      })
      .catch((error) => {
        console.error("Error resolving complaint:", error);
      });
    toast.success("Complain resolve successfully");
  };

  // Check if complaints is an array before filtering
  const unresolvedComplaints = Array.isArray(complaints)
    ? complaints.filter((complaint) => !complaint.resolved)
    : [];
  console.log(unresolvedComplaints);

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
        <span>
          <h2
            style={{
              fontSize: "1.7rem",
              marginTop: "1.1rem",
              fontFamily: "Agbalumo",
              fontWeight: "bold",
            }}
          >
            <b>
              <span>Students Complaints </span>
            </b>
          </h2>
        </span>
      </div>
      <div className="deatailas_complain" style={{ fontFamily: "Agbalumo" }}>
        <ul>
          {unresolvedComplaints.map((complaint) => (
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
              {complaint.images &&
                Array.isArray(complaint.images) &&
                complaint.images.length > 0 && (
                  <div style={{ marginBottom: "2rem" }}>
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
              <button onClick={() => resolveComplaint(complaint._id)}>
                Resolve
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chief_Student_complaints;
