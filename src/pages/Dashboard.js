import ProjectBar from "../components/dashboardComps/ProjectBar";
import TaskDisplay from "../components/dashboardComps/TaskDisplay";
import AddProject from "../components/dashboardComps/AddProject";
import { useContext, useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = ({ userDetails, setUserDetails }) => {
  const [projectData, setProjectData] = useState(null);

  const addProjectRef = useRef(null);
  const addTaskRef = useRef(null);

  return (
    <>
      <div className="dashboard">
        <ProjectBar
          userDetails={userDetails}
          setProjectData={setProjectData}
          addProjectRef={addProjectRef}
          addTaskRef={addTaskRef}
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
          <TaskDisplay projectData={projectData} />
        </div>
        <AddProject
          addProjectRef={addProjectRef}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      </div>
    </>
  );
};

export default Dashboard;
