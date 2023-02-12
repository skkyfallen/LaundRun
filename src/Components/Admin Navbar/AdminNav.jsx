import React from "react";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsCashCoin, BsPeople } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosSwitch } from "react-icons/io";
const AdminNav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/merchants">Merchants</a>
          </li>
          <li>
            <a href="/orders">Orders</a>
          </li>
          <li>
            <a href="withdrawals">Withdrawals</a>
          </li>
          <li>
            <a href="/accessControl">Access Control</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
        </ul>
        <ul className="icon-list">
          <li>
            <div className="home-icon">
              {" "}
              <AiOutlineHome />
            </div>
          </li>
          <li>
            <div className="people-icon">
              {" "}
              <BsPeople />
            </div>
          </li>
          <li>
            <div className="orders-icon">
              {" "}
              <CiDeliveryTruck />
            </div>
          </li>
          <li>
            <div className="cash-icon">
              {" "}
              <BiDollarCircle />
            </div>
          </li>
          <li>
            <div className="access-icon">
              {" "}
              <IoIosSwitch />
            </div>
          </li>
          <li>
            <div className="setting-icon">
              {" "}
              <AiOutlineSetting />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNav;
