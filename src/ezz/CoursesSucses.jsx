import "./Header.css"
import sucsses from  "./images/Rectangle 1354.svg"
import { Link } from 'react-router-dom'
const CoursesSucses = () => {
  return (
    <div id="tabs" className=" courseSucsses d-flex justify-content-center align-items-center flex-column vh-100 mx-auto  ">
      <div className=" bg-white p-5 text-center mt-4 rounded-md shadow-md">
      <img async src={sucsses} alt="sucsses" className=" mx-auto mb-5 rounded-md " />
              <h1>Selamat! Your Course Has Been Opened</h1>
              <p>The course you have chosen is now open, please click the button below</p>
              <Link to="/product" className=".button rounded-md">Back to Courses</Link>
      </div>
    </div>
  )
}
export default CoursesSucses