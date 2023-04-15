import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";
import AdminSignUp from "./UserControl/AdminSignUp.jsx";
import AdminToken from "./UserControl/AdminToken.jsx";
import AdminLogin from "./UserControl/AdminLogin.jsx";
import AdminHome from "./Components/Admin Home/AdminHome";
import MerchantsHome from "./Components/Admin Home/MerchantsHome.jsx"
import MerchantInfo from "./Components/Admin Home/MerchantInfo.jsx";
import { Route, BrowserRouter, Routes, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/signup" element={<AdminSignUp />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/merchants" element={<MerchantsHome/>}/>
          <Route path="/merchantInfo/:merchantId" element={<MerchantInfo/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
