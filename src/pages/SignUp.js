import React from "react";
import signup_pic from "../image_folder/signup-pic.png";
import IndvlSignup from "../components/IndvlSignup";
import {
  useLocation,
  BrowserRouter as Route,
  Router,
  Routes,
} from "react-router-dom";
import EntrepSignup from "../components/EntrepSignup";
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
