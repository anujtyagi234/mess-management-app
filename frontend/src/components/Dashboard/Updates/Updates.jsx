import './Updates.css';
import React, { useEffect, useState } from 'react';

function Update() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/notices', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(notices => setNotices(notices))
      .catch(error => console.error('Error fetching notices:', error));
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
      <div style={{ background: 'linear-gradient(to right, pink, yellow, red)', height: "370px", width: "90%", marginBottom: "5px", borderRadius: "20px", borderWidth: "0.05rem", borderColor: "black", marginTop: "1.5px", boxShadow: "10px 5px 5px rgb(177, 166, 170)" }}>
        <div className="sr" style={{ fontFamily: "Agbalumo" }}><h1>Updates</h1></div>
        <div style={{ fontFamily: "Agbalumo" }}>
          <h2><big><b>--Notice--</b></big></h2>
          <div style={{ padding: "5px" }}>
            {notices.map(notice => (
              <div style={{ marginBottom: "10px", backgroundColor: "white", borderRadius: "10px", borderWidth: "1.3px", borderColor: "black" }} key={notice.name}>
                <p>{notice.name}</p>
                <p> <span style={{ backgroundColor: "yellow", borderRadius: "50px" }}>Time:</span> {new Date(notice.timestamp).toLocaleString()}</p>
                <button style={{ backgroundColor: "aqua", borderWidth: "1px", borderColor: "black", marginTop: "1.5px", borderRadius: "10px" }} onClick={() => downloadFile(notice.name)}>Download</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
