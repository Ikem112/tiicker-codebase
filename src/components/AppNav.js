import React from "react";
import dashIcon from "../image_folder/icons/dashboard-icon.png";
import workspaceIcon from "../image_folder/icons/Office.png";
import notIcon from "../image_folder/icons/Alarm.png";
import userProfileIcon from "../image_folder/icons/user-profile.png";
import settingsIcon from "../image_folder/icons/Settings.png";
import logoutIcon from "../image_folder/icons/Logout.png";

const AppNav = ({ userDetails }) => {
  const name = userDetails.firstName;
  return (
    <>
      <div className="side-bar">
        <div className="profile">
          <div className="profile-pic">
            {console.log(name)}
            <h1>{name[0].toUpperCase()}</h1>
          </div>
          <p>
            Hey{" "}
            {userDetails.firstName.charAt(0).toUpperCase() +
              userDetails.firstName.slice(1)}
          </p>
        </div>
        <div className="icon-container">
          <img src={dashIcon} alt="" className="dash-icon-img" />
          <img src={notIcon} alt="" className="notify-icon-img" />
          <img src={userProfileIcon} alt="" className="user-profile-icon-img" />
          <img src={settingsIcon} alt="" className="settings-icon-img" />
        </div>
        <div className="sidebar-bottom">
          <img src={logoutIcon} alt="" className="logout-icon-img" />
        </div>
      </div>
    </>
  );
};

export default AppNav;
