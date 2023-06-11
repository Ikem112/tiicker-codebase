import AppNav from "../components/AppNav";
import Dashboard from "./Dashboard";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";

const TiickerPage = () => {
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  // const getUser = async (storedUser) => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/users`);
  //     const data = await res.json();
  //     console.log(data);

  //     const user = data.find((user) => user.email === storedUser);
  //     console.log(user);

  //     localStorage.setItem("id", user.id);
  //     localStorage.setItem("firstName", user.firstName);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   const param = localStorage.getItem("email");
  //   getUser(param);
  //   console.log("hi from useEffect");
  // });

  return (
    <div className="tiicker-page-wrapper">
      {console.log("im hitting ticker page")}
      <AppNav userDetails={userDetails} />
      <div className="content-section">
        <Dashboard userDetails={userDetails} setUserDetails={setUserDetails} />
      </div>
    </div>
  );
};

export default TiickerPage;
