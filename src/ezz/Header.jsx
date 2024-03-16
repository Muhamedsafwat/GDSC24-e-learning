import "./Header.css";
import head from "./images/head.svg";
import polygon from "./images/Polygon 4.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Header = () => {

  return (
    <>
      <div className="internalPage container mx-auto  my-5 ">
        <div className="headers mb-5 ">
          <h3 className="mb-3 text-2xl">Web design dan development</h3>
          <h1 className="mb-3 text-4xl font-semibold">Dasar Pemrograman web</h1>
          <h5 className=" text-black-50">
            Mengenal dasar--dasar pembuatan website
          </h5>
        </div>
        <div className="position-relative mb-5">
          <img
            async
            src={head}
            alt="thsi"
            className=" object-fit-contain w-100 rounded-3 img-fluid "
          />
          <div className="overlay">
            <img
              async
              src={polygon}
              alt="polygon"
              className="polygon img-fluid "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
