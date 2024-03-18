import React from "react";
import { useGet, getProduct } from "../Component/useCourse";
import { NavLink } from "react-router-dom";
import img1 from "../assets/blog.jpg";
import img2 from "../assets/blog2.avif";
import img3 from "../assets/blog3.avif";
import img4 from "../assets/blog4.avif";
import img5 from "../assets/blog5.avif";

export default function () {
  const { data, isLoading, error } = useGet("blogs", getProduct);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <div className="w-50 mx-auto form-group has-search">
          <span className="fa fa-search form-control-feedback has-search"></span>
          <input type="text" className="form-control" placeholder="search..." />
        </div>
      </div>
      <div className="row my-5 ">
        {data?.map((data) => (
          <div className="col-md-1 mx-auto" key={data?.id}>
            <NavLink to={`/product/${data?.id}`} className=" link mx-2">
              {data?.category}
            </NavLink>
          </div>
        ))}
      </div>
      <div className="row my-2">
        <div className="col-md-7">
          <img src={img1} alt="" className="w-100" />
          <div className="text">
            <small className="date ">19 jan 2022</small>
            <h2 className="h5 fw-bold my-2">He Developed with small notes </h2>
            <p className="date">
              see how change your live with coffe and programming its power of
              thing
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <div className="col-md-12 d-flex justify-content-between mb-2">
            <div className="col-md-6">
              <div className="text">
                <h2 className="h5 fw-bold my-2">He is Developer</h2>
                <small className="date ">19 jan 2022</small>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img2} alt="" style={{ width: "200px" ,height:'120px'}} />
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-between mb-2">
            <div className="col-md-6">
              <div className="text">
                <h2 className="h5 fw-bold my-2">He Developed usimg laptop</h2>
                <small className="date ">19 fab 2022</small>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img3} alt="" style={{ width: "200px" ,height:'120px' }} />
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-between mb-2">
            <div className="col-md-6">
              <div className="text">
                <h2 className="h5 fw-bold my-2">
                  He Developed with small notes
                </h2>
                <small className="date ">19 may 2022</small>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img4} alt="" style={{ width: "200px" ,height:'120px' }} />
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-between mb-2">
            <div className="col-md-6">
              <div className="text">
                <h2 className="h5 fw-bold my-2">The Coding is important</h2>
                <small className="date ">19 may 2022</small>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img5} alt="" style={{ width: "200px" ,height:'120px'}} />
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-4">
          <img src={img2} alt="" className="w-100" />
          <div className="text">
            <small className="date ">19 jan 2022</small>
            <h2 className="h5 fw-bold my-2">He Developed with small notes </h2>
            <p className="date">
              see how change your live with coffe and programming its power of
              thing
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={img2} alt="" className="w-100" />
          <div className="text">
            <small className="date ">19 jan 2022</small>
            <h2 className="h5 fw-bold my-2">He Developed with small notes </h2>
            <p className="date">
              see how change your live with coffe and programming its power of
              thing
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={img5} alt="" className="w-100" />
          <div className="text">
            <small className="date ">19 jan 2022</small>
            <h2 className="h5 fw-bold my-2">He Developed with small notes </h2>
            <p className="date">
              see how change your live with coffe and programming its power of
              thing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
