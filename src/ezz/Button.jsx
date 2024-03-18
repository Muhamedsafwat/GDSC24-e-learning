import { useState } from "react";
import content1 from "./CONTENT1.js";
import content2 from "./CONTENT2.js";
import head from "./images/head.svg";
import "./Header.css";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

useState;

const buttonsText = [
  {
    text: "Description",
  },
  {
    text: "Instructor",
  },
  {
    text: "Syllabus",
  },
  {
    text: "Precondition",
  },
  {
    text: "Teaching Method",
  },
  {
    text: "Testimonials",
  },
  {
    text: "FAQ",
  },
];

const Button = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <>
      <div
        id="tabs"
        className=" d-flex justify-content-center align-items-center border-bottom-1"
      >
        <menu>
          <div className="buttons">
            {buttonsText.map((item, index) => (
              <button
                key={item.text}
                className={`${activeContentIndex == index ? "active" : ""}`}
                onClick={() => setActiveContentIndex(index)}
              >
                {" "}
                {item.text}{" "}
              </button>
            ))}
          </div>
          <div className="underButtons">
            <div className="content ">
              <div className="content1">
                <h2 className=" mt-5 text-3xl m-2">
                  {content1[activeContentIndex].title}
                </h2>
                <div className="insideContent1 mb-6 ml-6">
                  <div>
                    <p>{content1[activeContentIndex].p1}</p>
                    <p>{content1[activeContentIndex].p2}</p>
                  </div>
                  <p className=" mt-5">{content1[activeContentIndex].p3}</p>
                  <ol className=" list-group list-group-numbered">
                    <li>{content1[activeContentIndex].list.l1}</li>
                    <li>{content1[activeContentIndex].list.L2}</li>
                    <li>{content1[activeContentIndex].list.L3}</li>
                  </ol>
                </div>
              </div>
              <img
                async
                src={head}
                alt="head photo "
                className=" img-fluid  rounded-3 "
              />
              <div className="content2">
                <h2 className=" mt-5 text-3xl mb-2">
                  {content2[activeContentIndex].title1}
                </h2>
                <div className="insideContent1 mb-6 ml-6">
                  <ul>
                    <li>{content2[activeContentIndex].l1}</li>
                    <li>{content2[activeContentIndex].l2}</li>
                    <li>{content2[activeContentIndex].l3}</li>
                    <li>{content2[activeContentIndex].l4}</li>
                  </ul>
                  <h2 className=" mt-5">
                    {content2[activeContentIndex].title2}
                  </h2>
                  <ul className=" list-disc">
                    <li>{content2[activeContentIndex].list.l1}</li>
                    <li>{content2[activeContentIndex].list.L2}</li>
                    <li>{content2[activeContentIndex].list.L3}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card mx-auto ">
              <h1>
                Don't Miss the Opportunity <br /> Let's Create Something!
              </h1>
              <p>
                Come on, access the free class, by clicking the button below
              </p>
              <Link to="sucsses">TAKE A COURSE</Link>
            </div>
          </div>
        </menu>
      </div>
      <Footer />
    </>
  );
};

export default Button;
