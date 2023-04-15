import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNav from "../Admin Navbar/AdminNav.jsx";
import "../Admin Navbar/AdminNav.css";
import { useSelector } from "react-redux";
import "regenerator-runtime/runtime.js";
import "./AdminHome.css";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  CircularProgress,
  Paper,
  TableContainer,
  Checkbox,
  Tab,
} from "@material-ui/core";
import { AiOutlineSearch } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
Modal.setAppElement("#root");
const AdminHome = () => {
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [merchants, setMerchants] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [merchantId, setMerchantId] = useState(null);
  const accessToken = localStorage.getItem("access_token");
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };
 
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const viewMerchant=(merchantId)=>{
    axios.get(`https://laundry-marketplace-api-production.up.railway.app/api/v1/admin/list/merchants/${merchantId}`,config)
    setMerchantId(merchantId)
    console.log("merchantId:",merchantId)
    navigate(`/merchantInfo/${merchantId}`)
  }
  const convertBooleanToString = (value) => {
    return value ? "Active" : "Inactive";
  };
  const handleMenuOpen = (merchants) => {
    setMerchants(merchants);
    setMenuOpen(true);
  };
  const handleApprove = (merchantId) => {
    axios
      .post(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/admin/merchant/approve",
        {
          merchantId: merchantId,
        },
        config
      )
      .then((response) => {
        console.log(response.data);
        toast("Approved Successfully");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    axios
      .get(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/admin/list/merchants",
        config
      )
      .then((response) => {
        setData(response.data.data.merchants);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);

  }, []);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
 const handleLogin=()=>{
    navigate("/login")
 }
  return (
    <div>
      <header>
        <div className="prof-container">
          {isAuthenticated ? (
            <h2>USERNAME </h2>
          ) : (
            <button className="home-login" onClick={handleLogin}>Login</button>
          )}
        </div>
      </header>

      <div className="table-container">
        <div className="table-head">
          <h1 className="access-head">Merchants</h1>
        </div>

        <div className="merchant-table-container">
          <TableContainer component={Paper} data={data}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox"></TableCell>
                  <TableCell>Store Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((merchants) => (
                  <TableRow key={merchants._id}>
                    <TableCell>
                      <Checkbox ></Checkbox>
                    </TableCell>
                    <TableCell>{merchants.businessName}</TableCell>
                    <TableCell>{merchants.email}</TableCell>
                    <TableCell>{merchants.phoneNumber}</TableCell>
                    <TableCell>
                      {merchants.isActive}
                      {convertBooleanToString(merchants.isActive)}
                    </TableCell>
                    <TableCell>
                      <button
                         onClick={() => viewMerchant(merchants._id)}  
                        className="select-merchant-btn"
                      >
                        .....
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* {menuOpen && (
            <div className="dialog-container">
              <h2>{merchants.businessName}</h2>
              <button onClick={() => handleApprove(merchants._id)}>
                Approve
              </button>
            </div>
          )} */}
        </div>
      </div>

      <AdminNav />
      <ToastContainer />
    </div>
  );
};

export default AdminHome;
