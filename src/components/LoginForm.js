import React from "react";
import { useState } from "react";
import { useRef } from "react";

const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPasssword] = useState("");

  const [triggerError, setTriggerError] = useState(false);

  const elementRef = useRef(null);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setTriggerError(false);
    const inputs = elementRef.current.querySelectorAll("input");

    inputs.forEach((input) => {
      input.style.borderColor = "";
    });

    const details = {
      "login-email": loginEmail,
      "login-password": loginPassword,
    };

    if (!loginEmail || !loginPassword) {
      setTriggerError(true);
      const filteredDictionary = Object.entries(details).reduce(
        (acc, [key, value]) => {
          if (value === "") {
            acc[key] = value;
          }
          return acc;
        },
        {}
      );

      const keys = Object.keys(filteredDictionary);

      keys.forEach((key) => {
        const element = elementRef.current.querySelector(`#${key}-input`);
        element.style.borderColor = "red";
      });
    }
  };

  return (
    <form className="login-form" onSubmit={handleLoginSubmit} ref={elementRef}>
      <div className="form-control">
        <label htmlFor="login-email-input">Email Address</label>
        <input
          type="text"
          id="login-email-input"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <div className="email-error-handler">
          {triggerError && !loginEmail && <p>Your email is required</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="login-password-input">Password</label>
        <input
          type="password"
          id="login-password-input"
          value={loginPassword}
          onChange={(e) => setLoginPasssword(e.target.value)}
        />
        <div className="password-error-handler">
          {triggerError && !loginPassword && <p>Your password is required</p>}
        </div>
      </div>
      <p className="reset-password-link">Forgot password?</p>
      <div className="form-control">
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
