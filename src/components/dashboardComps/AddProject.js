import React from "react";
import { useState } from "react";

const AddProject = ({ addProjectRef, userDetails, setUserDetails }) => {
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectCat, setNewProjectCat] = useState("");
  const [newProjectCatList, setNewProjectCatList] = useState([]);
  const [newProjectDesc, setNewProjectDesc] = useState("");

  const [projectNameError, setProjectNameError] = useState(false);
  const [catError, setCatError] = useState("");

  const getUserID = async (email) => {
    const getUsers = async () => {
      try {
        const res = await fetch(`http://localhost:5000/users`);
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
  const handleAddCat = () => {
    setNewProjectCat("");
    newProjectCatList.length === 3
      ? setCatError("Max categories is 3")
      : newProjectCatList.includes(newProjectCat)
      ? setCatError("Already added!")
      : newProjectCat !== "" &&
        setNewProjectCatList((prevList) => [...prevList, newProjectCat]);
  };

  const handleProjectAddition = async (e) => {
    e.preventDefault();

    const newProject = {
      name: newProjectName,
      category: newProjectCatList,
      description: newProjectDesc,
      tasks: [],
      reminders: [],
    };

    const existProject = userDetails.projects.find(
      (project) => project.name === newProjectName
    );

    if (existProject) {
      console.log(existProject);
      setProjectNameError(true);
      window.alert("Project already exists");
    }

    const addProjectToDB = async (id) => {
      try {
        const res = await fetch(`http://localhost:5000/users/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...userDetails,
            projects: [...userDetails.projects, newProject],
          }),
        });

        const data = res.json();

        localStorage.setItem(
          "user",
          JSON.stringify({
            ...userDetails,
            projects: [...userDetails.projects, newProject],
          })
        );

        setNewProjectCatList([]);
        setNewProjectName("");
        setNewProjectDesc("");
        setNewProjectCat("");

        addProjectRef.current.close();
      } catch (error) {
        console.error("Error:", error);
      }
    };
    console.log(userDetails.email);
    const userId = await getUserID(userDetails.email);
    console.log(userId);
    addProjectToDB(userId);

    console.log("successful");
  };

  return (
    <>
      <dialog className="modal add-project-modal" ref={addProjectRef}>
        <div className="add-project-header-cont">
          <h1>Add Project</h1>
        </div>
        <form onSubmit={handleProjectAddition}>
          <div className="form-control">
            <label htmlFor="project-name-input">Project Name</label>
            <input
              type="text"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="project-category-input">Project Category</label>
            <input
              type="text"
              value={newProjectCat}
              onChange={(e) => setNewProjectCat(e.target.value)}
            />
            <span onClick={handleAddCat}>Click to add another category</span>
            <div className="selected-cats">
              {!newProjectCatList ? (
                <h3></h3>
              ) : (
                newProjectCatList.map((cat, index) => (
                  <h3 key={index}>{cat},</h3>
                ))
              )}
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="project-description-input">
              Project Description
            </label>
            <textarea
              value={newProjectDesc}
              onChange={(e) => setNewProjectDesc(e.target.value)}
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div className="button-cont">
            <button
              type="button"
              onClick={() =>
                addProjectRef.current && addProjectRef.current.close()
              }
            >
              Close
            </button>
            <button>Add</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default AddProject;
