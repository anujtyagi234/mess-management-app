import "../Student/Updates/Updates.css";
import React, { useEffect, useState } from "react";

function Update() {
  const [notices, setNotices] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch("http://localhost:3000/notices",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((notices) => setNotices(notices));
  }, []);

  function downloadFile(filename) {
    fetch(`http://localhost:3000/downloads/${filename}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => console.error('Error downloading file:', error));
  }

  return (
    <>
      <h3 style={{ marginTop: "8px", marginBottom: "30px" }}>
        <big>
          <b>
            <span
              style={{
                fontFamily: "Agbalumo",
                backgroundColor: "white",
                textShadow: "2px 1px 2px rgb(206, 21, 107)",
                fontSize: "1.7rem",
                borderRadius: "10px",
              }}
            >
              Notice
            </span>
          </b>
        </big>
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "70%",
        }}
      >
        <div
          style={{
            background: "linear-gradient(to right, pink, yellow, red)",
            height: "400px",
            width: "60%",
            marginBottom: "10px",
            borderRadius: "20px",
            borderWidth: "0.05rem",
            borderColor: "black",
            marginTop: "1.5px",
          }}
        >
          <div style={{ fontFamily: "Agbalumo" }}>
            <h2>
              <big>
                <b>--Notice--</b>
              </big>
            </h2>
            <div style={{ padding: "10px" }}>
              {notices.map((notice) => (
                <div
                  style={{
                    marginBottom: "17px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    borderWidth: "1.3px",
                    borderColor: "black",
                  }}
                  key={notice.name}
                >
                  <p>{notice.name}</p>
                  <p>
                    {" "}
                    <span
                      style={{
                        backgroundColor: "yellow",
                        borderRadius: "50px",
                      }}
                    >
                      Time:
                    </span>{" "}
                    {new Date(notice.timestamp).toLocaleString()}
                  </p>
                  <button
                    style={{
                      backgroundColor: "aqua",
                      borderWidth: "1px",
                      borderColor: "black",
                      marginTop: "1.5px",
                      borderRadius: "10px",
                    }}
                    onClick={() => downloadFile(notice.name)}
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
