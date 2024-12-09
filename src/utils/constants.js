/*
Made a constants file to contain dummy Data for the site
 */

//used in department.js
export const modelDepartmentData = [
  { department_id: 1, department_name: "Mathematics" },
  { department_id: 2, department_name: "Statistics" },
  { department_id: 3, department_name: "Actuarial Science" },
  { department_id: 4, department_name: "English" },
  { department_id: 5, department_name: "French" },
];

// used in courses.js to find the course related to the department defined
export const modelDepartmentCourses = [
  {
    department_id: 1,
    department_name: "Mathematics",
    department_courses: [
      {
        course_id: 1,
        title: "Calculus I",
        department: "Mathematics",
        courseCode: "MAT 201",
      },
      {
        course_id: 2,
        title: "Linear Algebra",
        department: "Mathematics",
        courseCode: "MAT 202",
      },
      {
        course_id: 3,
        title: "Geometry and Topology",
        department: "Mathematics",
        courseCode: "MAT 203",
      },
    ],
  },
  {
    department_id: 2,
    department_name: "Statistics",
    department_courses: [
      {
        course_id: 1,
        title: "Probability Theory",
        department: "Statistics",
        courseCode: "STA 201",
      },
      {
        course_id: 2,
        title: "Data Analysis Techniques",
        department: "Statistics",
        courseCode: "STA 202",
      },
      {
        course_id: 3,
        title: "Statistical Modeling",
        department: "Statistics",
        courseCode: "STA 203",
      },
    ],
  },
  {
    department_id: 3,
    department_name: "Actuarial Science",
    department_courses: [
      {
        course_id: 1,
        title: "Introduction to Risk Theory",
        department: "Actuarial Science",
        courseCode: "ACT 201",
      },
      {
        course_id: 2,
        title: "Financial Mathematics I",
        department: "Actuarial Science",
        courseCode: "ACT 202",
      },
      {
        course_id: 3,
        title: "Life Contingencies I",
        department: "Actuarial Science",
        courseCode: "ACT 203",
      },
    ],
  },
  {
    department_id: 4,
    department_name: "English",
    department_courses: [
      {
        course_id: 1,
        title: "Introduction to Literature",
        department: "English",
        courseCode: "ENG 201",
      },
      {
        course_id: 2,
        title: "Creative Writing I",
        department: "English",
        courseCode: "ENG 202",
      },
      {
        course_id: 3,
        title: "Basic Linguistics",
        department: "English",
        courseCode: "ENG 203",
      },
    ],
  },
  {
    department_id: 5,
    department_name: "French",
    department_courses: [
      {
        course_id: 1,
        title: "French Grammar Basics",
        department: "French",
        courseCode: "FRE 201",
      },
      {
        course_id: 2,
        title: "French Literature Overview",
        department: "French",
        courseCode: "FRE 202",
      },
      {
        course_id: 3,
        title: "Conversational French I",
        department: "French",
        courseCode: "FRE 203",
      },
    ],
  },
];
