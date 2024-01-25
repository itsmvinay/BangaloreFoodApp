import { useState } from "react";
import { LOGO_URL } from "../utils/urls/url";
import { Link } from "react-router-dom";
import offlineOnlineStatus from '../utils/offlineOnlineStatus';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const internetStatus = offlineOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            online Status: {internetStatus === false ? "🚫" : "✅"}
          </li>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About Us </Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            Cart
            {/* <Link to="/contact">Cart</Link> */}
          </li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
