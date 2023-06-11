import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const IndvlSignup = () => {
  const navigate = useNavigate();

  const { storedUser, setStoredUser } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});

  const addUser = async (user) => {
    try {
      const res = await fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user.email);
    } catch (error) {
      console.error(error);
    }
  };

  const checkEmails = async (inputedEmail) => {
    const res = await fetch("http://localhost:5000/users");
    const users = await res.json();

    const existEmails = users.map((user) => user.email);

    const emailExists = existEmails.some((email) => email === inputedEmail);

    console.log(users);
    return emailExists;
  };

  // const [userObj, setUserObj] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   company: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const [fieldsError, setFieldError] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setUserObj({ ...userObj, [name]: value });
  // };

  // console.log(userObj);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [triggerError, setTriggerError] = useState(false);
  const [emailtriggerError, setEmailTriggerError] = useState(false);

  const elementRef = useRef(null);

  // const validation = () => {
  //   const errors = {};
  //   const { firstName, lastName, password, confirmPassword, company, email } =
  //     userObj;
  //   if (firstName === "") {
  //     errors.firstName = "This field is required";
  //   }
  //   if (lastName === "") {
  //     errors.lastName = "This field is required";
  //   }
  //   if (firstName === "") {
  //     errors.firstName = "This field is required";
  //   }
  //   if (password === "") {
  //     errors.password = "This field is required";
  //   }
  //   if (confirmPassword === "") {
  //     errors.confirmPassword = "This field is required";
  //   }
  //   if (company === "") {
  //     errors.company = "This field is required";
  //   }
  //   if (email === "") {
  //     errors.email = "This field is required";
  //   }

  //   return errors;
  // };

  // const handleCheckError = () => {
  //   const checkError = validation();
  //   setFieldError(checkError);

  //   if (Object.keys(checkError).length > 0) return;

  //   setFieldError({});
  //   console.log("regustration successful");
  // };

  const handleRegSubmit = (e) => {
    console.log("heyyy");
    e.preventDefault();
    setTriggerError(false);
    setEmailTriggerError(false);
    console.log("hiii");

    const inputs = elementRef.current.querySelectorAll("input");

    inputs.forEach((input) => {
      input.style.borderColor = "";
    });

    const details = {
      "first-name": firstName,
      "last-name": lastName,
      email: email,
      password: password,
      "confirm-password": confirmPassword,
    };

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
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
      // } else if (checkEmails(email)) {
      //   setEmailTriggerError(true);
    } else {
      const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        level: "individual",
        projects: [
          {
            id: 1,
            name: "Workspace",
            category: ["Webapp", "Product Design"],
            description:
              "project to automate the workflow of work items without the need for manual walking up and down",
            reminders: [
              "Please be punctual for the team meeting this Friday by 6",
              "The API for the insurance module will soon be provided",
              "Salary to be expected this Friday no fear",
            ],
            tasks: [
              {
                id: 1,
                name: "Landing page UI design",
                category: ["Design"],
                level: "newtask",
                content:
                  "Use preferences from conceptizilla ui board and create a landing page for workflow",
              },
              {
                id: 2,
                name: "Page Development and Debugging",
                category: ["Page Dev", "Debugging"],
                level: "newtask",
                content:
                  "Make use of HTML, CSS and Vanilla javascript to create the landing page for workflow. also implement tailwind and bootstrap for a better user experience.",
              },
            ],
          },
        ],
        userCreationDate: new Date(),
        notifications: [],
        userPreferences: {
          emailNotifications: {
            productUpdate: true,
            taskUpdates: true,
            workspaceUpdates: true,
          },
          pushNotifications: {
            taskUpdates: true,
            workspaceUpdates: true,
          },
        },
      };

      addUser(user);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setCompany("");

      console.log(localStorage.getItem("email"));
      navigate("/dashboard");
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
          name="firstName"
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
          name="lastName"
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
          name="email"
          id="email-input"
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="email-error-handler">
          {triggerError && !email && <p>Your email is required</p>}
          {emailtriggerError && <p>This email address exists already</p>}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="company-input">Company</label>
        <select
          className="input-class"
          name="company"
          id="company-input"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option value="None">None</option>
          <option value="InstiQ">InstiQ</option>
          <option value="Trello">Trello</option>
          <option value="Workflow">Workflow</option>
          <option value="RedTech">RedTech</option>
          <option value="Merchant Pay">Merchant Pay</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="password-input">Password</label>
        <input
          className="input-class"
          name="password"
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
          name="confirmPassword"
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default IndvlSignup;
