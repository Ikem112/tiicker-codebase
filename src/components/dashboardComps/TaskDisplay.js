import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const TaskDisplay = ({ projectData }) => {
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
              <div className="add-task new-task">
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
                      <div className="task-due-date">Due date - 09/05/23</div>
                    </div>
                  )
              )}
            </div>
            <div className="task-column">
              <div className="task-status-title in-progress">
                <div className="pointer"></div> In Progress
              </div>
              <div className="add-task new-task">
                <FaPlus />
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
                      <div className="task-due-date">Due date - 09/05/23</div>
                    </div>
                  )
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskDisplay;
