import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Sucsses = () => {
  return (
    <div className="card mx-auto ">
      <h1>Don't Miss the Opportunity <br /> Let's Create Something!</h1>
      <p>Come on, access the free class, by clicking the button below</p>
      <Link to='sucsses'>TAKE A COURSE</Link>
    </div>
  )
}

export default Sucsses