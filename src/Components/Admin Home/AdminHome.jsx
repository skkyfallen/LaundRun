import React from "react";
import AdminNav from "../Admin Navbar/AdminNav.jsx";
import "../Admin Navbar/AdminNav.css";
import EmptyHeader from "./EmptyHeader.jsx";
import "./AdminHome.css";
const AdminHome = () => {
  return (
    <div>
      <header>
        <div className="prof-container">
          <h1>USERNAME </h1>
          <span className="circle"></span>
        </div>
      </header>
      <div className="main-container">
        <div className="table-container"></div>
      </div>
      <AdminNav />
    </div>
  );
};

export default AdminHome;
