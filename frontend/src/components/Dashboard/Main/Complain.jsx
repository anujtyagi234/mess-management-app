// MessComplaintForm.jsx
import React, { useState } from 'react';
import './Complain.css'
const MessComplaintForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleUpload = () => {
    // Handle the file upload logic here (e.g., send it to the server)
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Add your file upload logic here
    } else {
      console.log('No file selected');
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const Hostels = [
		"SwamiViveka Nand Boys Hostel(SVBH)",
    "Bal Gangadhar Tilak Hostel(Tilak Hostel)",
    "Sardar Ballabh Bhai Patel Hostel(Patel Hostel)",
    "Ravindra Nath Taigore Hostel(Taigore Hostel)",
    "Diamond Jublee Girls Hostel(DG)",

	];

	const [selectedDay, setSelectedHostel] = useState("Monday");

  const handleChangeHostel = (e) => {
		setSelectedHostel(e.target.value);
	};
  const [formData, setFormData] = useState({
    fullName: '',
    RegistrationNumber: '',
    email: '',
    phone: '',
    roomNumber: '',
    Hostelname: '',
    category: '',
    complaintDetails: '',
    subject: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Complaint Form submitted:', formData);
    // Add logic to handle the form submission
  };

  return (

    
    <div className="Parent_container">
    <div className="container  " style={{width:"97%",height:"93vh"}} >
      
        <h2 className="Mess_heading text-3xl font-bold text-center mb-6 font-serif">Mess Complaint Form</h2>
        <div className='Deatials_box'>
        <form onSubmit={handleSubmit} className=" p-8 rounded w-full flex flex-col  shadow-lg" style={{ boxShadow: '10px 5px 2px rgb(235, 141, 170)' }}>
          <div className="mb-4 flex">
             

           
          </div>

          {/* Other form fields... */}

          


           {/* <div className="mb-4">
          <label htmlFor="Hostel_name" className="block text-gray-900 text-sm font-bold mb-2">Select Hostel:</label>
            <div className="hostel_select_name w-1 ">
            <select
  style={{
    boxShadow: '-4px 6px 2px rgb(235, 141, 170)',
    border: '1px solid #000',
    borderWidth: '2px',
  }}
  className="Select_Hostels_box"
  type="text"
  id="Hostelname"
  name="Hostelname"
  onChange={handleChangeHostel}
  value={selectedDay}
>
  <option value="" disabled selected>
    Select a Hostel
  </option>
  {Hostels.map((index) => (
    <option key={index} value={index}>
      {index}
    </option>
  ))}
</select>

            </div>
          </div>  */}
            <label htmlFor="complaintDetails" className="block text-gray-900 text-sm font-bold mb-2">Complaint Details:</label>
            <textarea
              id="complaintDetails"
              name="complaintDetails"
              value={formData.complaintDetails}
              onChange={handleChange}
              style={{boxShadow:'-4px 8.5px 2px rgb(235, 141, 170)',border: '1px solid #000', 
              borderWidth: '2px',     }}
              className="w-full px-3 py-12 border border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-md text-gray-900 transition-all duration-300 ease-in-out cursor-pointer"
              placeholder='Write here about issue'
            />
        </form>
<div className="Upload_imgg_folder">
<h2>Upload File and image  related to your Issues Here..</h2>
        <input
        type="file"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} className='Upload_Button'>Upload</button>

      </div>
      </div>
        <a href="#_" class="relative p-0.5 inline-flex mt-20 items-center justify-center font-bold overflow-hidden group rounded-md">
<span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span class="relative text-white">Submit-form</span>
</span>
</a>
      
    </div>
    </div>
  );
};
export default MessComplaintForm;
