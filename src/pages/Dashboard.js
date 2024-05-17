import ProjectBar from "../components/dashboardComps/ProjectBar";
import TaskDisplay from "../components/dashboardComps/TaskDisplay";
import AddProject from "../components/dashboardComps/AddProject";
import { useContext, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import AddReminder from "../components/dashboardComps/AddReminder";

const Dashboard = ({
  userDetails,
  setUserDetails,
  projectData,
  setProjectData,
}) => {
  const addProjectRef = useRef(null);
  const addTaskRef = useRef(null);
  const addReminderRef = useRef(null);

  const getUserID = async (email) => {
    const getUsers = async () => {
      try {
        const res = await fetch(`http://localhost:3000/users`);
        const data = await res.json();

        return data;
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const data = await getUsers();
    console.log(data);
    const curUser = data.find((user) => user.email === email);
    console.log(curUser.id);

    return curUser.id;
  };

  return (
    <>
      <div className="dashboard">
        <ProjectBar
          userDetails={userDetails}
          setProjectData={setProjectData}
          addProjectRef={addProjectRef}
        />

        <div className="info-display">
          <div className="descript-layer">
            {!projectData ? (
              <div>
                <h1>Select a Project To get started</h1>
              </div>
            ) : (
              <>
                <div className="project-info">
                  <div className="project-name">{projectData.name}</div>
                  <div className="project-category-cont">
                    <div className="partial-square"></div>
                    {projectData.category.map((category, index) => (
                      <div className="category" key={index}>
                        <div className="pointer"></div>
                        {category}
                      </div>
                    ))}
                  </div>
                  <div className="project-description">
                    &nbsp;&nbsp;&nbsp; - {projectData.description}
                  </div>
                </div>
                <div className="reminders">
                  <div className="reminder-title">
                    <h4>Reminders</h4>
                    <h4
                      onClick={() => addReminderRef.current.showModal()}
                      style={{ cursor: "pointer" }}
                    >
                      Add
                    </h4>
                  </div>
                  <ul>
                    {projectData.reminders.map((reminder, index) => (
                      <li key={index}>{reminder}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
          <TaskDisplay
            projectData={projectData}
            addTaskRef={addTaskRef}
            getUserID={getUserID}
            userDetails={userDetails}
            setProjectData={setProjectData}
          />
        </div>
        <AddProject
          addProjectRef={addProjectRef}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          getUserID={getUserID}
        />
        <AddReminder
          addReminderRef={addReminderRef}
          setProjectData={setProjectData}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          getUserID={getUserID}
          projectData={projectData}
        />
      </div>
    </>
  );
};

export default Dashboard;
