import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminPassword.css";
const AdminSignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleContinueClick = (event) => {
    event.preventDefault();
    axios
      .put(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/auth/admin/accept-invite",
        {
          email: email,
          firstname: firstName,
          lastname: lastName,
          token: token,
          password: password,
          confirmPassword: confirmPassword,
        }
      )
      .then((response) => {
        console.log(response.data);
        navigate("/login");
      })
      .catch((error) => {
        alert(error.response.data);
        console.log(error.response);
      });
  };
  return (
    <div class="main">
      <section className="signIn-container">
        <h1 className="welcome">Welcome,</h1>
        <p className="instruction1">Sign Up,</p>
        <form className="password-form">
          <p className="email-label">Email</p>
          <input
            type="email"
            placeholder="Enter your Email"
            className="email-field"
            name="password-field"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <p className="firstName-label">First-Name</p>
          <input
            type="text"
            placeholder="Enter your First Name"
            className="firstName-field"
            name="confirm-field"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <p className="lastName">Last-Name</p>
          <input
            type="text"
            placeholder="Enter your Last Name"
            className="lastName-field"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <p className="token-label">Token</p>
          <input
            maxLength={5}
            type="text"
            placeholder="Enter Token Sent to your Email"
            className="token-field"
            value={token}
            onChange={(event) => setToken(event.target.value)}
          />
          <p className="password-label2">Password</p>
          <input
            type="password"
            placeholder="Enter Password"
            className="password-field4"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <p className="confirmingPasswordLabel">Confirm Password</p>
          <input
            type="password"
            placeholder="Re-Enter your Password"
            className="confirmingPasswordField"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <button
            className="continue-btn4"
            type="submit"
            name="btn"
            onClick={handleContinueClick}
          >
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
};

export default AdminSignUp;
