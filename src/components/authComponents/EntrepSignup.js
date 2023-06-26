import React from "react";
import { useRef } from "react";
import { useState } from "react";

const EntrepSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [triggerError, setTriggerError] = useState(false);

  const elementRef = useRef(null);

  const handleRegSubmit = (e) => {
    e.preventDefault();
    setTriggerError(false);
    const inputs = elementRef.current.querySelectorAll("input");

    inputs.forEach((input) => {
      input.style.borderColor = "";
    });

    const details = {
      "first-name": firstName,
      "last-name": lastName,
      email: email,
      "company-name": companyName,
      password: password,
      "confirm-password": confirmPassword,
    };

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !companyName
    ) {
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
    <form
      onSubmit={handleRegSubmit}
      className="individual-signup"
      ref={elementRef}
    >
      <div className="form-control">
        <label htmlFor="first-name-input">First Name</label>
        <input
          className="input-class"
          id="first-name-input"
          value={firstName}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <div className="fname-error-handler">
          {triggerError && !firstName && <p>Your first name is required</p>}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="last-name-input">Last Name</label>
        <input
          className="input-class"
          id="last-name-input"
          value={lastName}
          type="text"
          onChange={(e) => setLastName(e.target.value)}
        />
        <div className="lname-error-handler">
          {triggerError && !lastName && <p>Your last name is required</p>}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="email-input">Email Address</label>
        <input
          className="input-class"
          id="email-input"
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="email-error-handler">
          {triggerError && !email && <p>Your email is required</p>}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="company-name-input">Company Name</label>
        <input
          className="input-class"
          id="company-name-input"
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <div className="company-name-error-handler">
          {triggerError && !email && <p>Your Company Name is required</p>}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="company-url-input">Company URL</label>
        <input
          className="input-class"
          id="company-url-input"
          type="text"
          value={companyName}
          onChange={(e) => setCompanyURL(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="password-input">Password</label>
        <input
          className="input-class"
          id="password-input"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="password-error-handler">
          {triggerError && !password && <p>Your password is required</p>}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="confirm-password-input">Confirm Password</label>
        <input
          className="input-class"
          id="confirm-password-input"
          value={confirmPassword}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="confirm-password-error-handler">
          {triggerError && !confirmPassword ? (
            <p>Confirm password is required</p>
          ) : password !== confirmPassword ? (
            <p>Your passwords are not matching</p>
          ) : (
            <p></p>
          )}
        </div>
      </div>

      <div className="form-control">
        <button className="button">Submit</button>
      </div>
    </form>
  );
};

export default EntrepSignup;
