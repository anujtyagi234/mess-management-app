// MessComplaintForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Complain.css';

const MessComplaintForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    complaintTitle: '',
    complaintDetails: '',
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (selectedFile && formData.complaintTitle && formData.complaintDetails) {
      const newFormData = new FormData();
      newFormData.append('image', selectedFile);
      newFormData.append('title', formData.complaintTitle);
      newFormData.append('description', formData.complaintDetails);

      axios
        .post('http://localhost:3000/api/complain', newFormData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          toast(response.data.message);
          setFormData({ complaintTitle: '', complaintDetails: '' });
          document.getElementById('image').value = null;
        })
        .catch((error) => {
          toast.error('Please try again later');
          console.error('Error submitting form:', error);
        });
    } else {
      toast.error('Please fill all fields');
    }
  };

  return (
    <div className="Parent_container" style={{ fontFamily: 'Agbalumo' }}>
      <div className="container123" style={{ width: '97%', height: '93vh' }}>
        <h2 className="Mess_heading text-3xl font-bold text-center mb-6 ">Mess Complaint Form</h2>
        <div className="Deatials_box gap-0">
          <form className="p-8 rounded w-full flex flex-col">
            <div className="mb-4 flex"></div>
            <div className="mb-4">
              <label htmlFor="complaintTitle" className="block text-gray-900 text-sm font-bold mb-2">
                Complaint Title:
              </label>
              <input
                id="complaintTitle"
                name="complaintTitle"
                value={formData.complaintTitle}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-md text-gray-900 transition-all duration-300 ease-in-out"
                style={{
                  boxShadow: '-4px 8.5px 2px rgb(235, 141, 170)',
                  border: '1px solid #000',
                  borderWidth: '2px',
                }}
                placeholder="Enter Complaint Title"
              />
            </div>
            <label htmlFor="complaintDetails" className="block text-gray-900 text-sm font-bold mb-2">
              Complaint Details:
            </label>
            <textarea
              id="complaintDetails"
              name="complaintDetails"
              value={formData.complaintDetails}
              onChange={handleChange}
              style={{
                boxShadow: '-4px 8.5px 2px rgb(235, 141, 170)',
                border: '1px solid #000',
                borderWidth: '2px',
              }}
              className="w-full px-3 py-12 border border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-md text-gray-900 transition-all duration-300 ease-in-out cursor-pointer"
              placeholder="Write here about issue"
            />
          </form>
          <div className="Upload_imgg_folder" style={{ fontFamily: 'Agbalumo' }}>
            <h2>Upload File and image related to your Issues Here..</h2>
            <input
              id="image"
              type="file"
              accept="image/*"
              style={{ fontFamily: 'Agbalumo' }}
              multiple
              onChange={handleFileChange}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="relative p-0.5 inline-flex mt-20 items-center justify-center font-bold overflow-hidden group rounded-md"
        >
          <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white">Submit-form</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default MessComplaintForm;
