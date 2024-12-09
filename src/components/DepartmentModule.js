import React from "react";
import "./DepartmentModule.css";
import DepartmentView from "./DepartmentView";
import EditModel from "./EditModel";
import axios from "axios";

const DepartmentModule = ({ departmentid, departmentname, config }) => {
  const [showDepartmentView, setShowDepartmentView] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [departmentData, setDepartmentData] = React.useState({});

  function getDepartmentView() {
    setShowDepartmentView(true);
  }

  function closeDepartmentView() {
    setShowDepartmentView(false);
  }

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/departments/${departmentid}`, config)
      .then((response) => {
        console.log("Department deleted sucessfully:", response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("Error deleting department:", error);
      });
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/departments/${departmentid}`,
          config,
        );
        setDepartmentData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [departmentid, config]);

  return (
    <div className="departmentinfo">
      <p>{departmentid}</p>
      <p>{`${departmentname} Dep't`}</p>
      <div>
        <button className="edit" onClick={handleEdit}>
          edit
        </button>
        <button className="view" onClick={getDepartmentView}>
          view
        </button>
        <button className="delete" onClick={handleDelete}>
          delete
        </button>
      </div>

      {showDepartmentView && (
        <DepartmentView
          closeDepartmentView={closeDepartmentView}
          department={{
            department_id: departmentid,
            department_name: departmentname,
          }}
        />
      )}
      {showEdit && (
        <EditModel
          setShowEdit={setShowEdit}
          departmentid={departmentid}
          departname={departmentname}
          config={config}
        />
      )}
    </div>
  );
};
export default DepartmentModule;
