import React from "react";
import DashboardRoute from "./routes/admin/DashboardRoute";
import Student_registration_routes from "./routes/admin/Student_registration_routes";
import CourseDetailsRoute from "./routes/admin/CourseDetailsRoute";

const App = () => {
  return (
    <>
      <DashboardRoute />
      <Student_registration_routes />
      <CourseDetailsRoute />
    </>
  );
};

export default App;
