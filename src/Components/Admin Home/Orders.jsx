import React from "react";
import AdminNav from "../Admin Navbar/AdminNav";
import axios from "axios";
import "./orders.css"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
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
import { login, logout } from "../../UserControl/authSlice.js";
const Orders = () => {
  const accessToken = localStorage.getItem("access_token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const convertBooleanToString = (value) => {
    return value ? "Paid" : "UnPaid";
  };
  const persistLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(login(token));
    }
  };
  const handleLogout = () => {
    navigate("/login");
    dispatch(logout());
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const retrieveOrders = () => {
    axios
      .get(
        "https://laundry-marketplace-api-production.up.railway.app/api/v1/admin/orders",
        config
      )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    retrieveOrders();
  }, []);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
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
      </div>
      <div className="orders-table-container">
        <h1 className="orders-table-head">Orders</h1>
        <TableContainer component={Paper} data={data} className="table-class">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell> ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Merchant</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Delivery Type</TableCell>
                <TableCell>Payment Method</TableCell>
              </TableRow>
            </TableHead>
            {data ? (
              <TableBody>
                {data.map((data) => (
                  <TableRow key={data._id}>
                    <TableCell>
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell>{data._id}</TableCell>
                    <TableCell>{data.createdAt} </TableCell>
                    <TableCell>{data.isPaid}
                    {convertBooleanToString(data.isPaid)}</TableCell>
                    <TableCell></TableCell>
                    <TableCell>{data.totalPrice}</TableCell>
                    <TableCell>{data.deliveryType}</TableCell>
                    <TableCell>{data.paymentMethod}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                <CircularProgress />
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </div>
      <AdminNav />
    </>
  );
};

export default Orders;
