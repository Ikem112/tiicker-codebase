import AppNav from "../components/AppNav";
import Dashboard from "./Dashboard";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";
import UserProfile from "../components/profileComps/UserProfile";
import SettingsPage from "../components/settingsComps/SettingsPage";

const TiickerPage = () => {
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const location = useLocation();
  const [projectData, setProjectData] = useState(null);

  return (
    <div className="tiicker-page-wrapper">
      {console.log("im hitting ticker page")}
      <AppNav userDetails={userDetails} />
      <div className="content-section">
        {location.pathname === "/dashboard" && (
          <Dashboard
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            projectData={projectData}
            setProjectData={setProjectData}
          />
        )}
        {location.pathname === "/profile" && (
          <UserProfile
            userDetails={userDetails}
            setUserDetails={setUserDetails}
          />
        )}
        {location.pathname === "/settings" && (
          <SettingsPage
            userDetails={userDetails}
            setUserDetails={setUserDetails}
          />
        )}
      </div>
    </div>
  );
};

export default TiickerPage;
