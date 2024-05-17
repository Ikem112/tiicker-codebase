import React from "react";
import { useState, useRef, useEffect } from "react";
import CalendarComp from "../CalendarComp";

const AddTasks = ({
  addTaskRef,
  getUserID,
  projectData,
  userDetails,
  setProjectData,
}) => {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskCat, setNewTaskCat] = useState("");
  const [newTaskCatList, setNewTaskCatList] = useState([]);
  const [newTaskDesc, setNewTaskDesc] = useState("");
  const [newTaskDueDate, setNewTaskDueDate] = useState(new Date());

  const [showCalendar, setShowCalendar] = useState(false);
  const [catError, setCatError] = useState(null);
  const [TaskNameError, setTaskNameError] = useState(false);

  const calendarRef = useRef();

  const handleClickOutsideCalendar = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideCalendar);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCalendar);
    };
  }, []);

  const getDateString = () => {
    const currentDate = new Date();

    // Get the current date components
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    // Get the current time components
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    // Format the date and time string
    const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return dateTimeString;
  };

  const handleAddCat = () => {
    setNewTaskCat("");
    newTaskCatList.length === 3
      ? setCatError("Max categories is 3")
      : newTaskCatList.includes(newTaskCat)
      ? setCatError("Already added!")
      : newTaskCat !== "" &&
        setNewTaskCatList((prevList) => [...prevList, newTaskCat]);
  };

  const handleTaskAddition = async (e) => {
    e.preventDefault();
    console.log("im being called");

    const newTask = {
      name: newTaskName,
      category: newTaskCatList.length === 0 ? [newTaskCat] : newTaskCatList,
      content: newTaskDesc,
      level: "newtask",
      creationDate: getDateString,
      levelChangeDate: null,
      completionDate: null,
      dueDate: newTaskDueDate,
    };

    console.log("we have saved the object");
    const existTask = projectData.tasks.find(
      (project) => project.name === newTaskName
    );

    if (existTask) {
      console.log(existTask);
      setTaskNameError(true);
      window.alert("Project already exists");
    }
    console.log("passed task condition");

    const addTaskToDB = async (id) => {
      try {
        const index = userDetails.projects.findIndex(
          (obj) => obj.name === projectData.name
        );

        const res = await fetch(`http://localhost:3000/users/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...userDetails,
            projects: [
              ...userDetails.projects.slice(0, index),
              {
                ...userDetails.projects[index],
                tasks: [...userDetails.projects[index].tasks, newTask],
              },
              ...userDetails.projects.slice(index + 1),
            ],
          }),
        });

        const data = res.json();

        setProjectData({
          ...projectData,
          tasks: [...projectData.tasks, newTask],
        });

        localStorage.setItem(
          "user",
          JSON.stringify({
            ...userDetails,
            projects: [
              ...userDetails.projects.slice(0, index),
              {
                ...userDetails.projects[index],
                tasks: [...userDetails.projects[index].tasks, newTask],
              },
              ...userDetails.projects.slice(index + 1),
            ],
          })
        );

        setNewTaskCatList([]);
        setNewTaskName("");
        setNewTaskDesc("");
        setNewTaskCat("");

        // window.location.reload();
        addTaskRef.current.close();
      } catch (error) {
        console.error("Error:", error);
      }
    };

    console.log(userDetails.email);
    const userId = await getUserID(userDetails.email);
    console.log(userId);
    addTaskToDB(userId);

    console.log("successful task addition");
  };

  return (
    <>
      <dialog className="modal add-modal" ref={addTaskRef}>
        <div className="add-task-header-cont">
          <h1>Add Task</h1>
        </div>
        <form onSubmit={handleTaskAddition}>
          <div className="form-control">
            <label htmlFor="task-name-input">Task Name</label>
            <input
              type="text"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="task-category-input">Task Category</label>
            <input
              type="text"
              value={newTaskCat}
              onChange={(e) => {
                setNewTaskCat(e.target.value);
                setCatError(null);
              }}
            />
            {!catError ? (
              <span onClick={handleAddCat}>Click to add another category</span>
            ) : (
              <span style={{ color: "red" }}>{catError}</span>
            )}
            <div className="selected-cats">
              {!newTaskCatList ? (
                <h3></h3>
              ) : (
                newTaskCatList.map((cat, index) => <h3 key={index}>{cat},</h3>)
              )}
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="task-description-input">Task Description</label>
            <textarea
              value={newTaskDesc}
              onChange={(e) => setNewTaskDesc(e.target.value)}
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div className="form-control date-control">
            <label htmlFor="task-duedate-input">End Date</label>
            <input
              type="text"
              value={newTaskDueDate.toLocaleDateString("en-US", {
                month: "numeric",
                day: "2-digit",
                year: "2-digit",
              })}
              readOnly
              onClick={() => setShowCalendar(!showCalendar)}
            />
            <CalendarComp
              calendarRef={calendarRef}
              setNewTaskDueDate={setNewTaskDueDate}
              newTaskDueDate={newTaskDueDate}
              showCalendar={showCalendar}
            />
          </div>
          <div className="button-cont">
            <button
              id="defined-button"
              type="button"
              onClick={() => addTaskRef.current && addTaskRef.current.close()}
            >
              Close
            </button>
            <button id="defined-button">Add</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default AddTasks;
