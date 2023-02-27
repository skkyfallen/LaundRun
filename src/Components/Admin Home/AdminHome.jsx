import React,{useState} from "react";
import AdminNav from "../Admin Navbar/AdminNav.jsx";
import "../Admin Navbar/AdminNav.css";
import EmptyHeader from "./EmptyHeader.jsx";
import "./AdminHome.css";
import {AiOutlineSearch} from "react-icons/ai";
const AdminHome = () => {
const [modal,setModal]= useState(false)
const toggleModal=()=>{
  setModal(!modal)
}
  return (
    <div>
      <header>
        <div className="prof-container">
          <h1>USERNAME </h1>
          <span className="circle"></span>
        </div>
      </header>

      <div className="table-container">
        <div className="table-head">
          <h1 className="access-head">Access Control</h1>
          <button  onClick={toggleModal} className="invite">+ Invite Administrator</button>
        </div>
        <div className="table-nav">
          <ul>
            <li className="admin-txt"><a href="/administrators"> Administrators</a>
            </li>
           <li><a href="/activity">Activity History</a></li>
          </ul>
          
          <input className="search-txt"type="text" placeholder="Search"></input>
        
        </div>
       <div className="modal">
        <div className="overlay"></div>
          <div className="modal-content">
            <h1>Add Administrator</h1>
            <form>
            <p>Name</p>
            <input type="text" className="modal-input" placeholder="eg Jason Skell"></input>
            <p>Email</p>
            <input type="text" className="modal-input" placeholder="example.gmail.com"></input>
            <p className="account-txt" name="account-txt" id="account-txt">Account  Type</p>
            <select >
              <option>Admin</option>
              <option>Super Admin</option>
            </select>
            <button className="next-modal">Next</button>
            </form>
        </div>
       </div>
      </div>

      <AdminNav />
    </div>
  );
};

export default AdminHome;
