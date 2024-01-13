import './Email.css'
import { useState } from 'react';
// Contact.js

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

import HomeComponent from './Dashi/Dashboard_main'
const Contact = () => {
  const [showHome, setShowHome] = useState(false);
  const form = useRef();
  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ei7fqns",
        "template_ncqwjam",
        form.current,
        "KwUoKTfOOqpjEgdcY"
      )
      .then(
        (result) => {
          console.log(result.text);
<<<<<<< HEAD
          alert("Feedback sent Successfully.");
          
=======
          alert("feedback sent");
          navigate('/');
>>>>>>> 1ca21d3c2f1e60cde22483aa0b9e6da39a854268
        },
        (error) => {
          console.log(error.text);
          alert("please try again later");
        }
      );
      return (
        <div>
         
          {showHome && <HomeComponent />}
        </div>
      );
  };

  return (
    <div className="StyledContactForm" style={{fontFamily:"Agbalumo"}}>
      <div className="MainContainer" style={{overflow:"hidden"}} >
        <div className='heading34'>
        <h1 style={{backgroundColor:"white",borderRadius:"30px",color:"black"}}><b>Feedback-form</b></h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label style={{marginLeft:"1rem",marginBottom:"0.07rem"}} > <b>  Name </b></label>
          <input type="text" name="user_name" placeholder='Enter your name here' />
          <label style={{marginLeft:"1rem",marginBottom:"0.2rem"}}> <b>  Email </b></label>
          <input type="email" name="user_email" placeholder='Enter your Email_id here'style={{marginBottom:"1.1rem"}} />
          <div style={{marginLeft:"1rem",marginBottom:"0.07rem"}}>
          <label ><b>  Message </b></label>
          </div>
          <textarea name="message" style={{marginLeft:"1rem",width:"20%"}} placeholder='Write your message here' />
          <input type="submit" value="Send"  className="submit-button" 
         />
          
        </form>
      </div>
    </div>
  );
};

export default Contact;

