// MessComplaintForm.jsx
import React, { useState } from 'react';
import './Complain.css'
const MessComplaintForm = () => {
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
    <div className="container mx-auto mt-8 " style={{ width: '800px', height: '720px' }}>
      <div style={{ flexDirection: "row" }}>
        <h2 className="text-3xl font-bold text-center mb-6 font-serif">Mess Complaint Form</h2>
        <form onSubmit={handleSubmit} className=" p-8 rounded w-full flex flex-col  shadow-lg" style={{ boxShadow: '10px 5px 2px rgb(235, 141, 170)' }}>
          <div className="mb-4 flex">
            <div className=" w-1/2 pr-2">
              <label htmlFor="fullName" className="block text-gray-900 text-sm font-bold mb-2">Full Name:</label>
              <input
  type="text"
  id="fullName"
  name="fullName"
  placeholder='Full name'
  value={formData.fullName}
  onChange={handleChange}
  style={{boxShadow:'-4px 6px 2px rgb(235, 141, 170)',  border: '1px solid #000', 
  borderWidth: '2px',    }}
  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-md text-gray-900 transition-all duration-300 ease-in-out cursor-pointer"
/>

            </div>

            <div className="w-1/2 pl-2">
              <label htmlFor="RegistrationNumber" className="block text-gray-900 text-sm font-bold mb-2">Registration Number:</label>
              <input
                type="text"
                id="RegistrationNumber"
                name="RegistrationNumber"
                placeholder='RegistrationNumber'

                style={{boxShadow:'-4px 6px 2px rgb(235, 141, 170)',border: '1px solid #000', 
                borderWidth: '2px',     }}
                value={formData.RegistrationNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-md text-gray-900 transition-all duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>

          {/* Other form fields... */}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-900 text-sm font-bold mb-2">Email:</label>
            <input
            style={{boxShadow:'-4px 6px 2px rgb(235, 141, 170)', 
            border: '1px solid #000', 
            borderWidth: '2px',     }}
              type="email"
              id="email"
              
              name="email"
              placeholder='G-suite id(Collage Email_id)'
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-md text-gray-900 transition-all duration-300 ease-in-out cursor-pointer"



// style={{boxShadow:'-4px 6px 5px rgb(235, 141, 170)' }}
            />
          </div>



          <div className="mb-4">
            <label htmlFor="Hostelname" className="block text-gray-900 text-sm font-bold mb-2">Hostel Name (Room-no)</label>
            <input
              type="text"
              id="Hostelname"
              name="Hostelname"
              placeholder='Hostel Name'
              value={formData.Hostelname}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-md text-gray-900 transition-all duration-300 ease-in-out cursor-pointer"
              style={{boxShadow:'-4px 6px 2px rgb(235, 141, 170)',border: '1px solid #000', 
              borderWidth: '2px',     }}
            />
          </div>



/
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

        
        <a href="#_" class="relative p-0.5 inline-flex mt-8 items-center justify-center font-bold overflow-hidden group rounded-md">
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
