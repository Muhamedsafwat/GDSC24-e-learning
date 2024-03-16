
import { Link } from 'react-router-dom'
import error from '../../images/404.svg'
const Error = () => {
  return (
    <div id="tabs" className=" d-flex justify-content-center align-items-center flex-column ">
      <img async src={error} alt="error" className="" />
      <div className="card mt-4">
              <h1>Upss... Halaman Tidak Ditemukan</h1>
              <p>Mohon maaf, halaman yang anda buka tidak ditemukan Pastikan url yang anda masukkan benar</p>
              <Link to="/">Home page</Link>
      </div>
    </div>
  )
}

export default Error