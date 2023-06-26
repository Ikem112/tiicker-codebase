import logo from "../image_folder/Tiicker_logo_1.png";
import { Link, useNavigate } from "react-router-dom";

import UserSelectionModal from "../pages/UserSelectionModal";

const LandNav = ({ dialogRef }) => {
  return (
    <div className="nav-bar">
      <div className="logo_container">
        <img className="tiicker_logo" src={logo} alt="Logo" />
      </div>
      <ul>
        <li>
          <a href="#">
            <span className="nav-bar-text">
              <Link to="/about">About</Link>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="nav-bar-text">
              <Link to="/contact_us">Contact Us</Link>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span id="login" className="nav-bar-text">
              <Link to="/login">Login</Link>
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            {/* <button className="nav-bar-text" onClick={() => setIsOpen(true)}>
              Sign Up
            </button> */}
            <button
              className="openModalBtn"
              onClick={() => dialogRef.current && dialogRef.current.showModal()}
            >
              Sign Up
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LandNav;
