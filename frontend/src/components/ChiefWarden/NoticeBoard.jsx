import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const NoticeBoard = () => {
  const navigate = useNavigate();
  const handleUploadNotice = () => {
    // Redirect to the same page (current page)
    navigate(window.location.pathname, { replace: true });
  };
  const [notices, setNotices] = useState([]);
  const [message, setMessage] = useState('');
  const [file, setFile] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:3000/notices', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(notices => setNotices(notices));
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

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('files', file);

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        setMessage('File uploaded successfully!');
        window.location.reload();
      } else {
        setMessage('File upload failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred during file upload.');
      console.error('File upload error:', error);
    }
    toast.success("File uploaded successfully.");
  };

  const styles = {
    bodyNotice: {
      fontFamily: 'Agbalumo',
      margin: 0,
      padding: 0,
      height: "100vh",
      borderRadius: "50px",
      background: 'transparent',
    },
    adminSection12: {
      maxWidth: '600px',
      margin: '20px auto',
      backgroundColor: '#e6f7ff', // Light blue
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    notice: {
      marginBottom: '20px',
      padding: '15px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9', // Light gray
      borderColor: "black",
      borderWidth: "2px",
    },
    buttonNotice: {
      backgroundColor: '#4caf50',
      color: 'black',
      padding: '3px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    button2: {
      backgroundColor: "aqua",
      color: 'black',
      marginTop: "2px",
      padding: '2px 2px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    messageNotice: {
      color: '#4caf50', // Green color for success message
      textAlign: 'center',
      marginTop: '10px',
    },
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Notice Board</title>
      </head>
      <body style={styles.bodyNotice}>
        <h1 style={{ fontSize: "1.7rem", backgroundColor: "transparent", textShadow: "2px 1px 2px rgb(206, 21, 107)", text: "black" }}>
          <span style={{ backgroundColor: "white", borderRadius: "10px", color: "black" }}>Notice Board</span>
        </h1>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div id="adminSection12" style={{ borderColor: "black", backgroundColor: "white", height: "60px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", borderRadius: "20px", width: "600px", borderWidth: "2px", boxShadow: '5px 5px 6px rgba(255, 255, 255, 0.5)', background: 'linear-gradient(to right, pink, yellow, red)' }}>
            <form encType="multipart/form-data" onSubmit={handleFileUpload}>
              <input
                type="file"
                name="files"
                accept=".pdf"
                onChange={handleChange}
              />
              <button type="submit" style={styles.buttonNotice} onClick={handleUploadNotice}>Upload Notice</button>
            </form>
            {message && <div style={styles.messageNotice}>{message}</div>}
          </div>
        </div>

        <div id="userSection" style={{ background: 'linear-gradient(to right, pink, yellow, red)', marginBottom: "50px", borderWidth: "4px", boxShadow: '10px 10px 6px rgba(255, 255, 255, 0.5)' }}>
          <h2><big><b>--Notice--</b></big></h2>
          <div id="notices">
            {notices.map(notice => (
              <div key={notice.name} style={styles.notice}>
                <p>{notice.name}</p>
                <p>Time: {new Date(notice.timestamp).toLocaleString()}</p>
                <button style={styles.button2} onClick={() => downloadFile(notice.name)}>Download</button>
              </div>
            ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default NoticeBoard;