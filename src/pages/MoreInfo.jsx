import React from "react";
import img from "../../assets/info.jpg";

export default function () {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6 ">
          <img src={img} alt="" className="w-100 " />
        </div>
        <div className="col-md-6 my-auto">
          <h2 style={{ textAlign: "left" }}>
            What Is Online{" "}
            <span className="d-block" style={{ color: "#2405F2" }}>
              Learning ?
            </span>{" "}
          </h2>
          <p
            className="my-3"
            style={{ fontSize: "14px", color: "#28293899", textAlign: "left" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            error non in, porro eveniet rerum voluptate repellendus repellat
            laboriosam nisi illum temporibus perferendis dolorum voluptatibus
            praesentium nam iste!
          </p>
          <p
            className="my-3"
            style={{ fontSize: "14px", color: "#28293899", textAlign: "left" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ea
            suscipit ad aut. Laborum quaerat impedit necessitatibus in eaque
            molestias aliquid facere architecto pariatur totam?
          </p>
          <a href="" style={{ color: "#2405F2" ,textAlign: "left" }}>Read more</a>
        </div>
      </div>
    </div>
  );
}
