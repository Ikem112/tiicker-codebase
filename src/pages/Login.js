import React from "react";
import login_pic from "../image_folder/login-pic.png";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div>
      <div className="login-cont">
        <div className="left-side">
          <h1>Login</h1>
          <p>Good to see you back!!</p>
          <div className="login-pic-cont">
            <img className="login-pic" src={login_pic} alt="login_img" />
          </div>
        </div>
        <div className="right-side">
          <h1>Enter your Details</h1>
          <div className="login-cont">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
