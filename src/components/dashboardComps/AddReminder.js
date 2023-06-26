import { useState } from "react";

const AddReminder = ({
  addReminderRef,
  userDetails,
  setProjectData,
  projectData,
  getUserID,
}) => {
  const [newReminder, setNewReminder] = useState("");

  const handleAddReminder = async (e) => {
    e.preventDefault();

    const addReminderToDB = async (id) => {
      try {
        const index = userDetails.projects.findIndex(
          (obj) => obj.name === projectData.name
        );

        const res = await fetch(`http://localhost:5000/users/${id}`, {
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
                reminders: [
                  ...userDetails.projects[index].reminders,
                  newReminder,
                ],
              },
              ...userDetails.projects.slice(index + 1),
            ],
          }),
        });

        setProjectData({
          ...projectData,
          reminders: [...projectData.reminders, newReminder],
        });
        console.log(projectData);

        localStorage.setItem(
          "user",
          JSON.stringify({
            ...userDetails,
            projects: [
              ...userDetails.projects.slice(0, index),
              {
                ...userDetails.projects[index],
                reminders: [
                  ...userDetails.projects[index].reminders,
                  newReminder,
                ],
              },
              ...userDetails.projects.slice(index + 1),
            ],
          })
        );

        setNewReminder("");

        addReminderRef.current.close();
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const userId = await getUserID(userDetails.email);
    console.log(userId);
    addReminderToDB(userId);

    console.log("successful task addition");
  };

  return (
    <>
      <dialog className="modal add-modal" ref={addReminderRef}>
        <div className="add-project-header-cont">
          <h1>Add Reminder</h1>
        </div>
        <form onSubmit={handleAddReminder}>
          <div className="form-control">
            <label htmlFor="Reminder-input">Reminder</label>
            <textarea
              value={newReminder}
              onChange={(e) => setNewReminder(e.target.value)}
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <div className="button-cont">
            <button
              id="defined-button"
              type="button"
              onClick={() =>
                addReminderRef.current && addReminderRef.current.close()
              }
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

export default AddReminder;
