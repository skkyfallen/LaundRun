import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPassword.css";
const AdminPassword = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handleConfirmPasswordChange = (event) => {
    setValues({ ...values, confirmPassword: event.target.value });
  };
  const handleContinueClick = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  return (
    <div class="main">
      <section className="password-container">
        <h1 className="welcome">Welcome,</h1>
        <p className="instruction">Create your password</p>
        <form className="password-form">
          <p className="password-label">Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="password-field"
            name="password-field"
            value={values.password}
            onChange={handlePasswordChange}
          />
          <p className="confirm-label">Re-Enter Password</p>
          <input
            type="password"
            placeholder="Re-Enter your password"
            className="password-field2"
            name="confirm-field"
            value={values.confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <button
            className="continue-btn3"
            type="submit"
            name="btn"
            onClick={handleContinueClick}
          >
            Continue
          </button>
        </form>
      </section>
    </div>
  );
};

export default AdminPassword;
