import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-brandBlue py-4 text-white">
      <div className="flex px-16 justify-between ">
        <div>
          <Link to={"/"} className=" font-bold text-2xl">
            EduFree
          </Link>
        </div>
        <nav className="space-x-10">
          <Link to="/">Home</Link>
          <a href="/#faq">FAQ</a>
          <Link to="/product">Courses</Link>
          <Link
            to="/logIn"
            className="px-4 py-2 border-white border-[1px] rounded-md"
          >
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
