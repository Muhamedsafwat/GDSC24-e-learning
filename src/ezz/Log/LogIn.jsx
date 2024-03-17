import { Link } from 'react-router-dom'
import './LogIn.css'
const LogIn = () => {
  return (
    <>
      <div className="LogIn w-100">
      <Link className='home text-2xl text-white' to="/"> &#8592; Home Page </Link>
        <div id="login-page">
            <div className="background">
              <h1>Online Learning Mangement System</h1>
            </div>
            <div className="login w-50">
              <h2 className="login-title text-4xl mb-4 pr-10 ">Login</h2>
              <p className="notice text-xl text-white-50 mb-6">Please login to access the system</p>
              <form className="form-login">
                <div className="input-email">
                  <input type="email" name="email" placeholder="Enter your e-mail" className=' p-2 rounded-md fs-5 ' required />
                </div>
                <div className="input-password">
                  <input type="password" name="password" placeholder="Enter your password" className=' p-2 rounded-md fs-5' required />
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="remember" className=' ml-3 ' />
                  <label htmlFor="remember" className='fs-4 ml-2 pl-3 text-white-50'>
                    Remember me
                  </label>
                </div>
                <Link to="/" className='signIn mb-3 fs-4 rounded-md mt-4 '> Sign in</Link>
              </form>
                <div className="register text-center">
                    <p className=' text-xl text-white'>If you don' have an account,<Link to="/register" className=' underline text-xl ml-2 hover:text-[#FCD980]' >Register Now </Link></p>
                </div>
            </div>
            </div>
      </div>
    </>
  )
}

export default LogIn