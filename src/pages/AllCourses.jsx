import { Link, NavLink } from "react-router-dom";
// import axios from "axios";
import { useGet, getProduct } from "../Component/useCourse";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default function AllCourses() {
  const { data, isLoading, error, isError } = useGet("detall", getProduct);
  if (isLoading) return <h2 className=" mt-20 mx-auto w-fit text-3xl ">Loading...</h2>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
    
      <NavBar />
    <div className="container lamia my-10">
      <div className="row">
        <div className="w-50 mx-auto form-group has-search">
          <span className="fa fa-search form-control-feedback has-search"></span>
          <input type="text" className="form-control" placeholder="search..." />
        </div>
      </div>
      <div className="row my-5 ">
        {data?.map((data) => (
          <div className="col-md-1 mx-auto" key={data?.id}>
            <NavLink to={`/product/${data?.id}`} className=" link">
              {data?.category}
            </NavLink>
          </div>
        ))}
      </div>

      <div className="row">
        {data?.map((data) => (
          <div className="col-md-4 my-4" key={data?.id}>
            <Link to={`/product/${data?.id}`} className=" link">
              <img
                src={data?.image}
                alt="img1"
                height={300}
                className="w-100"
              />
              <div className="text d-flex justify-content-between ">
                <h2 className="h5 my-3 fw-bold">{data?.title}</h2>
                <div className="rate d-flex justify-content-center align-item-center">
                  <span className="">
                    <i
                      className="fa-solid fa-star fa-sm  "
                      style={{ color: "#FFD43B" }}
                    ></i>
                  </span>
                  <p className="">{data?.rating?.rate}</p>
                </div>
              </div>
              <p className="dec">{data?.description}</p>
              <div className="d-flex justify-content-around ">
                <div className="clock icon">
                  <span>
                    <i className="fa-regular fa-clock mx-1"></i>
                    {data?.date}
                  </span>
                </div>
                <div className="video icon">
                  <span>
                    <i className="fa-regular fa-circle-play mx-1"></i>
                    {data?.rating?.count}
                  </span>
                </div>
                <div className="view icon">
                  <span>
                    <i className="fa-regular fa-user mx-1"></i>
                    {data?.people}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
