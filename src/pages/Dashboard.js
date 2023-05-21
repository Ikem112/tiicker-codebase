import ProjectBar from "../components/ProjectBar";
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <ProjectBar />
        <div className="info-display">
          <div className="descript-layer">
            <div className="project-info">
              <div className="project-name">Workflow</div>
              <div className="project-category-cont">
                <div className="partial-square"></div>
                <div className="category">
                  <div className="pointer"></div> Webapp
                </div>
              </div>
            </div>
            <div className="reminders">
              <div className="reminder-title">
                <h4>Reminders</h4>
              </div>
              <ul>
                <li>
                  Please be punctual for the team meeting this Friday by 6
                </li>
                <li>The API for the insurance module will soon be provided</li>
                <li>Salary to be expected this Friday no fear</li>
              </ul>
            </div>
          </div>
          <div className="task-display">
            <div className="content-titles">
              <p>Tasks</p>
              <p>Files</p>
            </div>
            <div className="task-wrapper">
              <div className="task-column">
                <div className="task-status-title">
                  <div className="pointer"></div> New task
                </div>
                <div className="add-task new-task">
                  <FaPlus />
                </div>
                <div className="task">
                  <div className="task-category-cont">
                    <div className="task-category">Design</div>
                  </div>
                  <div className="task-title">Landing page UI design</div>
                  <div className="task-content">
                    Use preferences from conceptizilla ui board and create a
                    landing page for workflow
                  </div>
                  <div className="task-due-date">Due date - 09/05/23</div>
                </div>
                <div className="task">
                  <div className="task-category-cont">
                    <div className="task-category">Debugging</div>
                    <div className="task-category">PageDev</div>
                  </div>
                  <div className="task-title">
                    Page Development and Debugging
                  </div>
                  <div className="task-content">
                    Make use of HTML, CSS and Vanilla javascript to create the
                    landing page for workflow. also implement tailwind and
                    bootstrap for a better user experience.
                  </div>
                  <div className="task-due-date">Due date - 09/05/23</div>
                </div>
                <div className="task"></div>
              </div>
              <div className="task-column">
                <div className="task-status-title">
                  <div className="pointer"></div> In Progress
                </div>
                <div className="add-task new-task">
                  <FaPlus />
                </div>
                <div className="task"></div>
                <div className="task"></div>
                <div className="task"></div>
              </div>
              <div className="task-column">
                <div className="task-status-title">
                  <div className="pointer"></div> Due
                </div>
                <div className="add-task new-task">
                  <FaPlus />
                </div>
                <div className="task"></div>
                <div className="task"></div>
                <div className="task"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
