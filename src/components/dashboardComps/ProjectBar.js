import { FaSearch, FaAngleDoubleDown, FaPlus } from "react-icons/fa";
import { useRef, useState } from "react";

const ProjectBar = ({
  setProjectData,
  userDetails,
  addProjectRef,
  addTaskRef,
}) => {
  const [projects, setProjects] = useState(userDetails.projects);

  const handleProjectSelect = (e) => {
    const getProjectData = () => {
      const projects = userDetails.projects;
      const chosenProject = projects.find(
        (project) => project.name === e.target.textContent
      );
      console.log(chosenProject);

      setProjectData(chosenProject);
    };

    getProjectData();
  };

  // const getProjects = async (id) => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/users/${id}`);
  //     const data = await res.json();

  //     const projects = data.projects;
  //     setProjects(projects);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getProjects(localStorage.getItem("id"));
  // }, []);

  // const clickHandler = (project) => {
  //   const recievedProject = getProject(project.id, currentUser.id);

  //   setProjectData(recievedProject);
  // };

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
          <FaPlus
            className="dash-icon"
            onClick={() => addProjectRef.current.showModal()}
          />
        </div>
        <div className="project-select-group">
          {projects.map((project, index) => (
            <div className="project-select" key={index}>
              <div className="pointer"></div>
              <p className="project-name" onClick={handleProjectSelect}>
                {project.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectBar;
