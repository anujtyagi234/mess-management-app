// complain.jsx

import React, { useState } from 'react';

const Complain = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);

    // You need to replace 'http://localhost:5000/upload' with your actual backend endpoint.
    await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });

    // You can redirect the user or show a success message.
  };

  return (
    <div>
      <h1>Complain Page</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Complain;
