import { Routes, Route } from "react-router-dom";
import "./App.css";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//import pages
import HomePage from "./pages/HomePage";
import AllCourses from "./pages/AllCourses.jsx";
import DetailCourse from "./pages/DetailCourse.jsx";
import CoursesSucses from "./ezz/CoursesSucses.jsx";
import Error from "./ezz/Error.jsx"
import MoreInfo from "./ezz/MoreInfo/MoreInfo.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/product" Component={AllCourses} /> 
        <Route path="/product/:id" Component={DetailCourse} />
        <Route path="/product/:id/sucsses" Component={CoursesSucses} />
        <Route path="/error" Component={Error} />
        <Route path="/more-info" Component={MoreInfo} />
      </Routes>
    </>
  );
}

export default App;
