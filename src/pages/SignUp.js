import React from "react";
import signup_pic from "../image_folder/signup-pic.png";
import IndvlSignup from "../components/authComponents/IndvlSignup";
import {
  useLocation,
  BrowserRouter as Route,
  Router,
  Routes,
  Link,
} from "react-router-dom";
import EntrepSignup from "../components/authComponents/EntrepSignup";
import { useState } from "react";

const SignUp = ({ setCurrentUser, currentUser }) => {
  const location = useLocation();

  return (
    <>
      <div className="signup-cont">
        <div className="left-side">
          <h1>Sign Up</h1>
          <p>We are glad you decided to join us!!</p>
          <div className="signup-pic-cont">
            <img className="signup-pic" src={signup_pic} alt="signup_img" />
          </div>
        </div>
        <div className="right-side">
          <div className="link-cont">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/login">Login</Link>
            </p>
          </div>
          <h1>Submit your details</h1>
          <div className="signup-cont">
            {location.pathname === "/signup/individual-signup" ? (
              <IndvlSignup
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            ) : (
              <EntrepSignup />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
