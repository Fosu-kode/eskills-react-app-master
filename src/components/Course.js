import "./Course.css";
import { modelDepartmentCourses } from "../utils/constants";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Course(props) {
  const { departmentId } = useParams();
  const [courses, setCourses] = useState(
    modelDepartmentCourses[Number(departmentId) - 1],
  );
  return (
    <section>
      <h2>{courses.department_name}</h2>
      <section className="main">
        {courses.department_courses.map((course) => (
          <Card key={course.course_name} course={course} />
        ))}
      </section>
    </section>
  );
}

const Card = ({ course }) => {
  const { course_id, courseCode, title, department } = course;
  return (
    <section className={`card`}>
      <div>
        <p className={`department`}>{department}</p>
        <small className={`course-code`}>{courseCode}</small>
      </div>
      <h1 className={`course-title`}>{title}</h1>
    </section>
  );
};

export default Course;
