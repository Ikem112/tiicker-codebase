import React from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import ikemProfile from "../../image_folder/ikem-profile.jpg";

const UserProfile = ({ userDetails }) => {
  const dateString = userDetails.userCreationDate;
  const date = new Date(dateString);

  const formattedDate = format(date, "MMMM do, yyyy", { locale: enUS });

  const getTotalTasks = () => {
    let taskCount = 0;
    userDetails.projects.forEach(
      (project) => (taskCount += project.tasks.length)
    );
    console.log(taskCount);
    return taskCount;
  };

  const statObj = {
    "Total Tasks": getTotalTasks(),
    "Total Projects": userDetails.projects.length,
  };
  return (
    <>
      <div className="user-profile">
        <div className="upper-region">
          <div className="profile-pic-cont">
            <img className="profile-pic" src={ikemProfile} alt="ProfilePic" />
          </div>
        </div>
        <div className="lower-region">
          <div className="left-side">
            <div className="info-control-cont">
              <div className="info-control">
                <p>First Name</p>
                <h2>{userDetails.firstName}</h2>
              </div>
              <div className="info-control">
                <p>Last Name</p>
                <h2>{userDetails.lastName}</h2>
              </div>
              <div className="info-control">
                <p>Email</p>
                <h2>{userDetails.email}</h2>
              </div>
              <div className="info-control">
                <p>User Level</p>
                <h2>{userDetails.level}</h2>
              </div>
              <div className="info-control">
                <p>Date Joined</p>
                <h2>{formattedDate}</h2>
              </div>
            </div>
            <button id="defined-button">Edit Profile</button>
          </div>
          <div className="right-side">
            {Object.entries(statObj).map(([key, value]) => (
              <div className="stat-control" key={key}>
                <p className="stat-value">{value}</p>
                <h2 className="stat-name">{key}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
