import "./App.css";
import AllCourses from "./Component/AllCourses/AllCourses";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import DetailCourse from "./Component/DetailCourse/DetailCourse";

function App() {
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "product", element: <AllCourses /> },
        { path: "product/:id", element: <DetailCourse /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routs} />
    </>
  );
}

export default App;
