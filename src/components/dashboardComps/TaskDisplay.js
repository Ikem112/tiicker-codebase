import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { IconName } from "react-icons/bi";
import AddTasks from "./AddTasks";

const TaskDisplay = ({
  projectData,
  addTaskRef,
  getUserID,
  userDetails,
  setProjectData,
}) => {
  const setFormattedDate = (date) => {
    const formattedDate = new Date(date)
      .toLocaleDateString("en", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
      .replace(/\//g, "/");

    return formattedDate;
  };

  const [catBackColor, setCatBackColor] = useState("grey");

  const getRandomColour = () => {
    const colors = [
      "#FFC300", // Vivid Yellow
      "#E71D36", // Cinnabar
      "#FF5733", // Orange
      "#DA70D6", // Orchid
      "#3D9970", // Emerald Green
      "#0074D9", // Azure Blue
      "#B10DC9", // Electric Purple
      "#39CCCC", // Teal
      "#F012BE", // Magenta
      "#2ECC40", // Lime Green
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomElement = colors[randomIndex];
    const inlineStyle = {
      backgroundColor: randomElement,
      border: `1px solid ${randomElement}`,
    };

    return inlineStyle;
  };

  return (
    <>
      <div className="task-display">
        <div className="content-titles">
          <p>Tasks</p>
          <p>Files</p>
        </div>
        {console.log(projectData)}
        {projectData === null ? (
          <div></div>
        ) : (
          <div className="task-wrapper">
            {console.log("passing condition")}
            <div className="task-column">
              <div className="task-status-title new-task">
                <div className="pointer"></div> New task
              </div>
              <div
                className="add-task new-task"
                onClick={() => addTaskRef.current.showModal()}
              >
                <FaPlus />
              </div>
              {projectData.tasks.map(
                (task, index) =>
                  task.level === "newtask" && (
                    <div className="task" key={index}>
                      <div className="task-category-cont">
                        {task.category.map((category, index) => (
                          <div
                            className="task-category"
                            style={getRandomColour()}
                            key={index}
                          >
                            {category}
                          </div>
                        ))}
                      </div>
                      <div className="task-title">{task.name}</div>
                      <div className="task-content">{task.content}</div>
                      <div className="task-due-date">
                        Due date - {setFormattedDate(task.dueDate)}
                      </div>
                    </div>
                  )
              )}
            </div>
            <div className="task-column">
              <div className="task-status-title in-progress">
                <div className="pointer"></div> In Progress
              </div>
              {projectData.tasks.map(
                (task, index) =>
                  task.level === "inprogress" && (
                    <div className="task" key={index}>
                      <div className="task-category-cont">
                        {task.category.map((category, index) => (
                          <div
                            className="task-category"
                            style={getRandomColour()}
                            key={index}
                          >
                            {category}
                          </div>
                        ))}
                      </div>
                      <div className="task-title">{task.name}</div>
                      <div className="task-content">{task.content}</div>
                      <div className="task-due-date">Due date - 09/05/23</div>
                    </div>
                  )
              )}
            </div>
            <div className="task-column">
              <div className="task-status-title due-soon">
                <div className="pointer"></div> Due Soon
              </div>
              {projectData.tasks.map(
                (task, index) =>
                  task.level === "dueSoon" && (
                    <div className="task" key={index}>
                      <div className="task-category-cont">
                        {task.category.map((category, index) => (
                          <div
                            className="task-category"
                            style={getRandomColour()}
                            key={index}
                          >
                            {category}
                          </div>
                        ))}
                      </div>
                      <div className="task-title">{task.name}</div>
                      <div className="task-content">{task.content}</div>
                      <div className="task-due-date">Due date - 09/05/23</div>
                    </div>
                  )
              )}
            </div>
          </div>
        )}
        <AddTasks
          setProjectData={setProjectData}
          addTaskRef={addTaskRef}
          projectData={projectData}
          getUserID={getUserID}
          userDetails={userDetails}
        />
      </div>
    </>
  );
};

export default TaskDisplay;
