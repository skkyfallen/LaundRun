import React from "react";
import { useState } from "react";
import "./AdminToken.css";
const AdminToken = () => {
  const [value, setValue] = useState({
    token: "",
  });
  const handleTokenChange = (event) => {
    setValue({ ...value, token: event.target.value });
  };
  const handleContinueClick=(event) => {
    event.preventDefault();
  }
  return (
    <div class="main">
      <section className="container">
        <h1>Welcome,</h1>
        <p>Enter your Token</p>
        <form className="form">
          <label htmlFor="field">
            Enter the 4-Digit Code sent to your E-mail
          </label>
          <input
            type="text"
            className="form-field"
            placeholder="Enter 4-Digit Code"
            name="field"
            value={value.token}
            onChange={handleTokenChange}
          />
          <button type="submit" class="continue-btn" onClick={handleContinueClick}>Continue</button>
        </form>
      </section>
    </div>
  );
};

export default AdminToken;
