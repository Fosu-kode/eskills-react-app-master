import React from "react";
import "./DepartmentView.css";
import { Link } from "react-router-dom";

const DepartmentView = ({ closeDepartmentView, department }) => {
  return (
    <div className="infocontainer">
      <div className="infobox">
        <div className="infoheader">
          <span className="close-btn" onClick={closeDepartmentView}>
            &times;
          </span>
        </div>
        <div className="student-info">
          <h2>Department information</h2>
          <div className="contentcontainer">
            <p>
              <strong>Department:</strong> {department.department_name}
            </p>
            {/*modified the department view to show a link which will move to the specific department and show its courses*/}
            <Link to={`/MainPage/courses/${department.department_id}`}>
              Check course out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DepartmentView;
