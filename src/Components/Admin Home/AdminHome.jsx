import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AdminNav from "../Admin Navbar/AdminNav.jsx";
import "../Admin Navbar/AdminNav.css";
import Modal from "react-modal";
import EmptyHeader from "./EmptyHeader.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AdminHome.css";
import { useDispatch } from "react-redux";
import { login, logout } from "../../UserControl/authSlice.js";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  CircularProgress,
  Paper,
  TableContainer,
  Tab,
} from "@material-ui/core";
import { AiOutlineSearch } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AdminHome = () => {
  const dispatch = useDispatch();
  const persistLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(login(token));
    }
  };
  const [state, setState] = useState({
    /* sAuthenticated, */
  });
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const toggleModal = () => {
    setModal(!modal);
  };
  const accessToken = localStorage.getItem("access_token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };
  const handleLogout = () => {
    navigate("/login");
    dispatch(logout())
  };
  const handleLogin = () => {
    navigate("/login");
  };
  useEffect(() => {
    axios
      .get(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/admin/list",
        config
      )
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("You are Unauthorized to view this table");
      });
  }, []);
  useEffect(() => {
    persistLogin();
  }, [dispatch]);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/auth/admin/invite",
        {
          email: email,
          role: selectedOption,
        },
        config
      )
      .then((response) => {
        console.log(response.data);
        console.log(accessToken);
        toast.success("Admin Invited Successfully");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        console.log(accessToken);
        toast.error("You are Unauthorized to carry out this action");
      });
  };
  const convertBooleanToString = (value) => {
    return value ? "Active" : "Inactive";
  };
  Modal.setAppElement("#root");
  return (
    <div>
      <header>
        <div className="prof-container">
          {isAuthenticated ? (
            <>
              <h2>USERNAME</h2>
              <button className="home-login" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button className="home-login" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </header>

      <div className="table-container">
        <div className="table-head">
          <h1 className="access-head">Access Control</h1>
          <button onClick={toggleModal} className="invite">
            + Invite Administrator
          </button>
        </div>
        <div className="table-nav">
          <ul>
            <li className="admin-txt">
              <a href="/administrators"> Administrators</a>
            </li>
            <li>
              <a href="/activity">Activity History</a>
            </li>
          </ul>

          <input
            className="search-txt"
            type="text"
            placeholder="Search"
          ></input>
        </div>
        {modal && (
          <div className="modal">
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
              <h1>Add Administrator</h1>

              <form className="modal-form">
                <p>Email</p>
                <input
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="modal-input"
                  placeholder="example@gmail.com"
                ></input>
                <p className="account-txt" name="account-txt" id="account-txt">
                  Account Type
                </p>
                <select
                  value={selectedOption}
                  onChange={(event) => setSelectedOption(event.target.value)}
                >
                  <option></option>
                  <option>admin</option>
                  <option>super-admin</option>
                </select>
                <button className="next-modal" onClick={handleSubmit}>
                  Next
                </button>
              </form>
            </div>
          </div>
        )}
        <div className="admin-table-container">
          <TableContainer component={Paper} data={data}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <input type="checkbox"></input>
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Date Addded</TableCell>
                  <TableCell>Access Type</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((data) => (
                  <TableRow key={data._id}>
                    <TableCell>
                      <input type="checkbox" />{" "}
                    </TableCell>
                    <TableCell>{data.firstname + data.lastname}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.createdAt}</TableCell>
                    <TableCell>{data.role}</TableCell>
                    <TableCell>
                      {" "}
                      {convertBooleanToString(data.status)}{" "}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <AdminNav />
      <ToastContainer />
    </div>
  );
};

export default AdminHome;
