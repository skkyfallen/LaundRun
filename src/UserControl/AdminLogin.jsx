import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./AdminLogin.css";
const AdminLogin = () => {
 const [email, setEmail]=useState('');
 const [password, setPassword]= useState('');
 const [authenticated, setAuthenticated]= useState('')
 
  const handleContinueClick = (event) => {
    event.preventDefault();
    axios.post("https://api-laundry-marketplace.onrender.com/api/v1/auth/admin/login",{
      email:email,
      password:password
    })
    .then((response)=>{
      console.log(response.data);
       setAuthenticated(true);
       navigate("/AdminHome")
    })
    .catch((error)=>{
      console.log(error);
      alert(error.response.data.errors)
      window.location.reload(false)
    })
  }
  const navigate= useNavigate();
  return (
    <div class="main">
      <section className="password-container">
        <h1 className="welcome">Hello,</h1>
        <p className="instruction">Sign in to your account</p>
        <form className="dfpassword-form">
          <p className="password-label">Username or Email</p>
          <input
            type="email"
            placeholder="Enter your username or email"
            className="password-field"
            name="password-field"
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
           
          />
          <p className="confirm-label">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="password-field2"
            name="confirm-field"
            value={password}
            onChange={(event)=> setPassword(event.target.value)}
            
          />
          <input type="checkbox" className="checkbox" />
          <p className="check-text">Keep me signed in</p>
          <p className="forgot-text">
            <a href="/">Forgot Password?</a>
          </p>
          <button
            className="continue-btn3"
            type="submit"
            onClick={handleContinueClick}
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default AdminLogin;
