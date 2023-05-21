import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const UserSelectionModal = ({ dialogRef }) => {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("");

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedPage(value);
  };

  const handleContinueButtonClick = () => {
    if (selectedPage === "individual") {
      navigate("/signup/individual-signup");
    } else if (selectedPage === "enterprise") {
      navigate("/signup/enterprise-signup");
    }
  };

  return (
    <div>
      <dialog ref={dialogRef} className="modal" id="modal">
        <header>
          <span
            className="back-button"
            onClick={() => dialogRef.current && dialogRef.current.close()}
          >
            Back
          </span>
        </header>
        <div>
          <h1>What would you like to register as??</h1>
        </div>
        <div className="signup-hero">
          <div className="signup-level-1-cont" id="segment">
            <div className="level-name-cont">
              <input
                type="checkbox"
                id="modalCheckbox1"
                value="enterprise"
                checked={selectedPage === "enterprise"}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="modalCheckbox1">Enterprise</label>
            </div>
            <p>
              &nbsp;&nbsp;&nbsp;This would you enable you to create and control
              a workspace in which you can manage team tasks, view team
              efficiency and much more! The enterprise name would be validated a
              few moments after entry.
            </p>
          </div>
          <div className="signup-level-2-cont" id="segment">
            <div className="level-name-cont">
              <input
                type="checkbox"
                id="modalCheckbox2"
                value="individual"
                checked={selectedPage === "individual"}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="modalCheckbox2">Individual</label>
            </div>
            <p>
              &nbsp;&nbsp;&nbsp;As an individual, you have the power to take
              charge of all your personal projects and track each task until
              completion! You also have the option to join existing workspaces
              where you'll have to be verified as a member
            </p>
          </div>
        </div>

        <button onClick={handleContinueButtonClick}>Continue</button>
      </dialog>
    </div>
  );
};

export default UserSelectionModal;
