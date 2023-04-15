
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
  import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import AdminNav from "../Admin Navbar/AdminNav.jsx";
import "../Admin Navbar/AdminNav.css";
import Modal from "react-modal";
import EmptyHeader from "./EmptyHeader.jsx";
import { useSelector } from "react-redux";
import "./AdminHome.css";
const convertBooleanToString = (value) => {
    return value ? "Active" : "Inactive";
  };
  const accessToken = localStorage.getItem("access_token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
const AdminTable = () => {
    const [data, setData] = useState([]);
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
          });
      }, []);
  return (
   <>
   <div className="table-main-container">
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
                  <TableRow key={data.id}>
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
        </>
  )
}

export default AdminTable