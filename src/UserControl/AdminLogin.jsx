import React from "react";
import { useState } from "react";
import "./AdminLogin.css";
const AdminLogin = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleUsernameChange = (event) => {
    setValues({ ...values, username: event.target.value });
  };
  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handleContinueClick = (event) => {
    event.preventDefault();
  };
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
            value={values.username}
            onChange={handleUsernameChange}
          />
          <p className="confirm-label">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="password-field2"
            name="confirm-field"
            value={values.password}
            onChange={handlePasswordChange}
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
            Continue
          </button>
        </form>
      </section>
    </div>
  );
};

export default AdminLogin;
