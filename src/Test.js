import React, { useState } from "react";
import { useEffect } from "react";

const Test = () => {
  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/users");
  //     let data = await response.json();

  //     data = data[0].email;
  //     setData(data); // Set the fetched projects data as state
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const handleClick = () => {
  //   console.log(data);
  // };
  const user = {
    firstName: "bob",
    lastName: "stew",
    email: "ikem.eteh@gmail.com",
    password: "pass",
    level: "individual",
    projects: [
      {
        name: "RedTech",
        category: ["Finance", "WebApp"],
        description: "A project to help pay the salaries of individuals",
        tasks: [],
        reminders: [],
      },
      {
        name: "ACH",
        category: ["Finance", "Registration"],
        description: "A project to help submit cheques for approval",
        tasks: [],
        reminders: [],
      },
      {
        name: "",
        category: [],
        description: "",
        tasks: [],
        reminders: [],
      },
    ],
    userCreationDate: "2023-06-08T17:55:14.473Z",
    notifications: [],
    id: 2,
  };

  const index = user.projects.findIndex((obj) => obj.name === "RedTech");

  const updated_user = {
    ...user,
    projects: [
      ...user.projects.slice(0, index),
      {
        ...user.projects[index],
        tasks: [...user.projects[index].tasks, { name: "bob", age: 12 }],
      },
      ...user.projects.slice(index + 1),
    ],
  };

  return (
    <div>
      {console.log({
        ...user.projects[index],
        tasks: [...user.projects[index].tasks, { name: "bob", age: 12 }],
      })}
      {console.log(updated_user)}
      <div></div>
    </div>
  );
};

export default Test;
