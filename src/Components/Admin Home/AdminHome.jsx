import React,{useState} from "react";
import axios from 'axios';
import AdminNav from "../Admin Navbar/AdminNav.jsx";
import "../Admin Navbar/AdminNav.css";
import EmptyHeader from "./EmptyHeader.jsx";
import { useSelector } from "react-redux";
import "./AdminHome.css";
import {AiOutlineSearch} from "react-icons/ai";
const AdminHome = () => {
const [modal,setModal]= useState(false)
const [email, setEmail]= useState('');
const [selectedOption, setSelectedOption]=useState('');
const toggleModal=()=>{
  setModal(!modal)
}
const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
const handleSubmit=(event)=>{
event.preventDefault();
axios.post("https://api-laundry-marketplace.onrender.com/api/v1/auth/admin/invite",{
  email:email,
  role:"admin",
})
.then((response)=>{
  console.log(response.data);
})
.catch((error)=>{
  console.log(error);
  console.log(error.response);
})
}

  return (
    <div>
      <header>
        <div  className="prof-container">
          {isAuthenticated ? (
          <h2>USERNAME </h2>
          ): (
            <h1>Login Here</h1>
          )}
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
       {/* <div className="modal">
        <div className="overlay"></div>
          <div className="modal-content">
            <h1>Add Administrator</h1>
            <form className="modal-form">
            <p>Email</p>
            <input type="text"  value={email} onChange={(event)=> setEmail(event.target.value)}   className="modal-input" placeholder="example@gmail.com"></input>
            <p className="account-txt" name="account-txt" id="account-txt">Account  Type</p>
            <select value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)}>
              <option>admin</option>
              <option>Super Admin</option>
            </select>
            <button className="next-modal" onClick={handleSubmit}>Next</button>
            </form>
        </div>
       </div> */}
      </div>

      <AdminNav />
    </div>
  );
};

export default AdminHome;
