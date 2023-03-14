import React from "react";
import { useState } from "react";
import "./merchantinfo.css";
import AdminNav from "../Admin Navbar/AdminNav";
import { useSelector } from "react-redux";

const MerchantInfo = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <header>
        <div className="prof-container">
          {isAuthenticated ? (
            <h2>USERNAME </h2>
          ) : (
            <button className="home-login">Login</button>
          )}
        </div>
      </header>
      <div className="all-container">
        <div className="merchant-main-info">
          <h1>Store Name</h1>
          <p className="legalID" href="/legald">
            View Legal ID
          </p>
          <div className="grid">
            <div className="grid-item">
              <p>Owner Name</p>
              <h3> Warren Buffet</h3>
            </div>
            <div className="grid-item">
              <p>Phone Number</p>
              <h3>08033151262</h3>
            </div>
            <div className="grid-item">
              <p>Email</p>
              <h3>w.warren@example.com</h3>
            </div>
            <div className="grid-item">
              <p>Address & City</p>
              <h3>4766 Adams Avenue Walter</h3>
            </div>
            <div className="grid-item">
              <p>Date Joined</p>
              <h3>24 November, 2021</h3>
            </div>
            <div className="grid-item">
              <p>State & Country</p>
              <h3>Lagos State, Nigeria</h3>
            </div>
          </div>

          <div className="merchant-bank-info">
            <div className="bank-info-holder">
              <h3>Bank Information</h3>
              <a className="show-more" href="/">
                Show more
              </a>
            </div>
            <div className="banks-holder">
              <div className="banks">
                <h2>GT Bank</h2>
                <p>0123456789</p>
                <p>Adam Alexander</p>
              </div>
              <div className="banks">
                <h2>UBA</h2>
                <p>0123456789</p>
                <p>Adam Alexander</p>
              </div>
              <div className="banks">
                <h2>Zenith Bank</h2>
                <p>0123456789</p>
                <p>Adam Alexander</p>
              </div>
            </div>
          </div>
          <div className="overview">
            <h1>Overview</h1>
            <div className="overview-info">
              <div className="overview-info-item">
                <p>Wallet Balance</p>
                <h2>$15.350.00</h2>
                <p>+6% from last month</p>
              </div>
              <div className="overview-info-item">
                <p>Total Transactions</p>
                <h2>350</h2>
                <p>+6% from last month</p>
              </div>
              <div className="overview-info-item">
                <p>Total Commissions</p>
                <h2>$15.350.00</h2>
                <p>+6% from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminNav />
    </>
  );
};

export default MerchantInfo;
