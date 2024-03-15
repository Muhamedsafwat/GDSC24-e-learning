import React from "react";

const NavBar = () => {
  return (
    <div className="bg-brandBlue py-4 text-white">
      <div className="flex px-16 justify-between ">
        <div>
          <h1 className=" font-bold text-2xl">EduFree</h1>
        </div>
        <nav className="space-x-10">
          <a href="">Home</a>
          <a href="">FAQ</a>
          <a href="">About Us</a>
          <button className="px-4 py-2 border-white border-[1px] rounded-md">
            Login
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
