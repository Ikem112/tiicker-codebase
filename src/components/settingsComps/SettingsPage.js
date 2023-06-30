import { useState } from "react";
import settingsIcon from "../../image_folder/icons/Settings.png";

const SettingsPage = ({ userDetails }) => {
  const [userSettings, setUserSettings] = useState({
    emailProductUpdate: userDetails.emailNotifications.productUpdate,
    emailTaskUpdate: userDetails.emailNotifications.taskUpdates,
    emailWorkspaceUpdated: userDetails.emailNotifications.workspaceUpdates,
    pushTaskUpdates: userDetails.pushNotifications.taskUpdates,
    pushWorkspaceUpdates: userDetails.pushNotifications.workspaceUpdates,
  });

  const handleSettingChange = async (e) => {
    e.preventDefault();
    if (e.target.value.startsWith("email")) {
      const isChecked = e.target.checked;
      const string = e.target.value;
      const prefix = "email";
      const value = string.slice(prefix.length);
      const body = {
        ...userDetails,
        userPreferences: {
          ...userPreferences,
          emailNotifications: { ...emailNotifications, value: !isChecked },
        },
      };
    }
    elif(e.target.value.startsWith("push"));

    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <>
      <div className="user-settings">
        <div className="setting-title-cont">
          <h1>Settings</h1>
          <img src={settingsIcon} alt="" className="settings-icon-img" />
        </div>
        <div className="settings-body">
          <div className="setting-category">
            <div className="category-title">
              <h1>Notification Settings</h1>
            </div>
            <div className="category-title-desc">
              <p>Select the kind of notifications you want to receive</p>
            </div>
          </div>
          <div className="setting-type-group">
            <div className="type-title-cont">
              <div className="type-title-name">
                <h2>Email Notifications</h2>
              </div>
              <div className="type-title-desc">
                <p>
                  Get emails to find out what’s going on when you’re not online.
                  You can turn these off
                </p>
              </div>
            </div>
            <div className="setting-toggler-cont">
              <div className="toggler-option">
                <div className="slider-cont">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={userSettings.emailProductUpdate}
                      value={"emailProductUpdate"}
                      onChange={handleSettingChange}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle-info">
                  <div className="toggle-name">
                    <h2>News and product updates</h2>
                  </div>
                  <div className="toggle-desc">
                    <p>
                      Get emails on the latest news and product features and
                      updates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="toggler-option">
                <div className="slider-cont">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle-info">
                  <div className="toggle-name">
                    <h2>Task Updates</h2>
                  </div>
                  <div className="toggle-desc">
                    <p>
                      Get emails on task creation, assignment and deadlines soon
                      to be reached.
                    </p>
                  </div>
                </div>
              </div>
              <div className="toggler-option">
                <div className="slider-cont">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle-info">
                  <div className="toggle-name">
                    <h2>Workspace Updates</h2>
                  </div>
                  <div className="toggle-desc">
                    <p>
                      Get emails concerning workspace additions, removals and
                      reminders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="setting-type-group">
            <div className="type-title-cont">
              <div className="type-title-name">
                <h2>Push Notifications</h2>
              </div>
              <div className="type-title-desc">
                <p>
                  Get push notifications in-app to find out what’s going on when
                  you’re online
                </p>
              </div>
            </div>
            <div className="setting-toggler-cont">
              <div className="toggler-option">
                <div className="slider-cont">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle-info">
                  <div className="toggle-name">
                    <h2>Task Updates</h2>
                  </div>
                  <div className="toggle-desc">
                    <p>
                      Get push notifications on task creation, assignment and
                      deadlines soon to be reached.
                    </p>
                  </div>
                </div>
              </div>
              <div className="toggler-option">
                <div className="slider-cont">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                  </label>
                </div>
                <div className="toggle-info">
                  <div className="toggle-name">
                    <h2>Workspace Updates</h2>
                  </div>
                  <div className="toggle-desc">
                    <p>
                      Get push notifications concerning workspace additions,
                      removals and reminders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
