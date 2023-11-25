import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import './Reset.css'

function ForgotPassword() {
    const [email, setEmail] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/api/forgot", {email})
        .then(res => {
          console.log(res)
            if(res.data.status === "Success") {
                navigate('/login')
               
            }
        }).catch(err => console.log(err))
    }

    return(
        <div className="back555 d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded "style={{width:"40vw",height:"30vh",borderRadius:"20px",boxShadow:"2px 9px 10px white",background: 'linear-gradient(to right, pink, yellow, red)'}}>
        <h4 style={{fontSize:"1.7rem",textShadow:"2px 2px 2px rgb(206, 21, 107)",fontWeight:"bold",marginBottom:"2rem"}}>Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" >
              <strong >Email:</strong>
            </label>
            <input
     style={{marginLeft:"2rem",boxShadow:"1px 2px 2px aqua",borderWidth:".1rem",borderColor:"black",borderRadius:".41rem",width:"50%"}}
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100"style={{backgroundColor:"black",color:"white",borderRadius:"10px",boxShadow:"8px 2px 2px grey"}}>
            Send
          </button>
          </form>
        
      </div>
    </div>
    )
}

export default ForgotPassword;