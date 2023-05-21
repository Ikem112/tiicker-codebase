import { FaSearch, FaAngleDoubleDown, FaPlus } from "react-icons/fa";
import { IoSquare } from "react-icons/io5";

const ProjectBar = () => {
  return (
    <>
      <div className="project-cont">
        <div className="search-bar-cont">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
            className="project-search-bar"
          />
        </div>
        <div className="all-projects-title-cont">
          <FaAngleDoubleDown className="dash-icon" />
          <p className="all-projects-title">All Projects</p>
          <FaPlus className="dash-icon" />
        </div>
        <div className="project-select-group">
          <div className="project-select">
            <div className="pointer"></div>
            <p className="project-name">Workflow</p>
          </div>
          <div className="project-select">
            <div className="pointer"></div>
            <p className="project-name">Workflow</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBar;
