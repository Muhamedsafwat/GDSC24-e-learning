import "./Header.css"
import sucsses from  "./images/Rectangle 1354.svg"
import { Link } from 'react-router-dom'
const CoursesSucses = () => {
  return (
    <div id="tabs" className=" courseSucsses d-flex justify-content-center align-items-center flex-column vh-100 mx-auto ">
      <div className=" bg-white p-5 text-center mt-4">
      <img async src={sucsses} alt="sucsses" className=" mx-auto mb-5 " />
              <h1>Selamat! Kursus Anda Telah Di Buka</h1>
              <p>Kurus yang anda pilih sudah di buka, Silahkan klik buttondibawah ini</p>
              <Link to="" className=".button">Buka Kursus</Link>
      </div>
    </div>
  )
}
export default CoursesSucses