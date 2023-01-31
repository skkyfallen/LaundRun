import logo from './logo.svg';
import './App.css';
import {useNavigate} from "react-router-dom";
import AdminPassword from "./UserControl/AdminPassword.jsx"
import AdminToken from "./UserControl/AdminToken.jsx";
import AdminLogin from "./UserControl/AdminLogin.jsx";
import {Route, BrowserRouter,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminToken/>}/>
        <Route path="/password" element={<AdminPassword/>}/>
        <Route path="/login" element={<AdminLogin/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
