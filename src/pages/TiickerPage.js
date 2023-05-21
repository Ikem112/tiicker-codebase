import AppNav from "../components/AppNav";
import Dashboard from "./Dashboard";

const TiickerPage = () => {
  return (
    <div className="tiicker-page-wrapper">
      <AppNav />
      <div className="content-section">
        <Dashboard />
      </div>
    </div>
  );
};

export default TiickerPage;
