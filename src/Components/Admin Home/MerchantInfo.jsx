import React from "react";
import { useState, useEffect } from "react";
import "./merchantinfo.css";
import axios from "axios";
import AdminNav from "../Admin Navbar/AdminNav";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MerchantInfo = () => {
  const { merchantId } = useParams();
  const accessToken = localStorage.getItem("access_token");
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const [data, setData] = useState([]);
  const getMerchantInfo = () => {
    axios
      .get(
        `https://laundry-marketplace-api-production.up.railway.app/api/v1/admin/list/merchants/${merchantId}`,
        config
      )
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data.merchant);
      })
      .catch((error) => {
        console.error(error.response);
      });
  };
  const approveMerchant = () => {
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
        toast.success("Merchant Approved");
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Merchant Approval Failed");
      });
  };

  useEffect(() => {
    getMerchantInfo();
  }, []);

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
      {data.merchant ? (
        <div className="all-container">
          <div className="merchant-main-info">
            <h1>{data.merchant.businessName}</h1>
            <p className="legalID" href="/legald">
              View Legal ID
            </p>
            <button
              className="approve-merchant-button"
              onClick={approveMerchant}
            >
              Approve Merchant
            </button>
            <div className="grid">
              <div className="grid-item">
                <p>Owner Name</p>
                <h3> {data.merchant.fullName}</h3>
              </div>
              <div className="grid-item">
                <p>Phone Number</p>
                <h3>{data.merchant.phoneNumber}</h3>
              </div>
              <div className="grid-item">
                <p>Email</p>
                <h3>{data.merchant.email}</h3>
              </div>
              <div className="grid-item">
                <p>Address & City</p>
                <h3>{data.merchant.storeAddress}</h3>
              </div>
              <div className="grid-item">
                <p>Date Joined</p>
                <h3>24 November, 2021</h3>
              </div>
              <div className="grid-item">
                <p>State & Country</p>
                <h3>{data.merchant.state}, Nigeria</h3>
              </div>
            </div>
            {data.merchant.bankDetails ? (
              <div className="merchant-bank-info">
                <div className="bank-info-holder">
                  <h3>Bank Information</h3>
                  <a className="show-more" href="/">
                    Show more
                  </a>
                </div>
                <div className="banks-holder">
                  <div className="banks">
                    <h2>{data.merchant.bankDetails.bank}</h2>
                    <p>{data.merchant.bankDetails.accountNumber}</p>
                    <p>{data.merchant.bankDetails.accountName}</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="merchant-bank-info">
                  <h3 className="no-bank-info">NO BANK INFO</h3>
                </div>
              </>
            )}
            {/* <div className="overview">
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
            </div> */}
          </div>
        </div>
      ) : (
        <>
          <CircularProgress className="loading-bar" />
        </>
      )}
      <AdminNav />
      <ToastContainer />
    </>
  );
};

export default MerchantInfo;
