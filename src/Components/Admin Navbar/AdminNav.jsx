import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsCashCoin, BsPeople } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosSwitch } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
const AdminNav = () => {
  const navigate = useNavigate();
  const handleMerchantsClick = () => {
    navigate("/merchants");
  };
  const location = useLocation();
  return (
    <div>
      <nav>
        <ul>
          <li className={location.pathname === "/merchants" ? "active" : ""}>
            <BsPeople className="icons" />
            <span>
              <NavLink to="/merchants" className="nav-link">
                Merchants
              </NavLink>
            </span>
          </li>
          <li className={location.pathname === "/orders" ? "active" : ""}>
            <CiDeliveryTruck className="icons" />
            <span>
              <NavLink to="/orders" className="nav-link">
                Orders
              </NavLink>
            </span>
          </li>
          <li className={location.pathname === "/withdrawals" ? "active" : ""}>
            <BiDollarCircle className="icons" />
            <span>
              <NavLink to="/withdrawals" className="nav-link">
                Withdrawals
              </NavLink>
            </span>
          </li>
          <li className={location.pathname === "/AdminHome" ? "active" : ""}>
            <IoIosSwitch className="icons" />
            <span>
              <NavLink to="/AdminHome" className="nav-link">
                Access Control
              </NavLink>
            </span>
          </li>
          <li className={location.pathname === "/settings" ? "active" : ""}>
            <AiOutlineSetting className="icons" />
            <span>
              <NavLink to="/settings" className="nav-link">Settings</NavLink>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNav;
