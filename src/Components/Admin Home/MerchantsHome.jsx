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
const AdminHome = () => {
  const navigate = useNavigate();
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const accessToken = localStorage.getItem("access_token");
  const handleRowClick = (event, data) => {
    setSelectedRow(data.id);
    navigate("/merchantInfo")
  };
  const handleCheckboxClick = async (event) => {
    
    try {
      const response = await axios.get(
        `https://api-laundry-marketplace.onrender.com/api/v1/admin/list/merchants:merchantId, configu`
      );
      const merchantId = response.data.data.merchants._id;
      navigate("/merchantInfo", { state: { data: merchantId } });
    } catch (error) {
      console.log(error);
    }
  };
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const convertBooleanToString = (value) => {
    return value ? "Active" : "Inactive";
  };
  useEffect(() => {
    axios
      .get(
        "https://api-laundry-marketplace.onrender.com/api/v1/admin/list/merchants",
        config
      )
      .then((response) => {
        setData(response.data.data.merchants);
        console.log(response.data.data.merchants);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, []);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <header>
        <div className="prof-container">
          {isAuthenticated ? (
            <h2>USERNAME </h2>
          ) : (
            <button className="home-login">Login</button>
          )}
        </div>
      </header>

      <div className="table-container">
        <div className="table-head">
          <h1 className="access-head">Merchants</h1>
        </div>

        <div className="admin-table-container">
          <TableContainer component={Paper} data={data}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox"></TableCell>
                  <TableCell>Store Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((merchants) => (
                  <TableRow
                    key={data.id}
                    onClick={(event) => handleRowClick(event, data)}
                    selected={selectedRow === data.id}
                  >
                    <TableCell>
                      <Checkbox
                        onClick={handleCheckboxClick}
                        checked={selectedRow === data.id}
                      ></Checkbox>
                    </TableCell>
                    <TableCell>{merchants.businessName}</TableCell>
                    <TableCell>{merchants.email}</TableCell>
                    <TableCell>{merchants.phoneNumber}</TableCell>
                    <TableCell>
                      {" "}
                      {merchants.isActive}
                      {convertBooleanToString(merchants.isActive)}
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
