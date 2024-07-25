import img from "../assets/info.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MoreInfo() {
  return (
    <>
      <NavBar />
      <div className="container bg-white vh-100 pt-5">
        <div className="row text-3xl ">
          <div className="col-md-6 ">
            <img src={img} alt="" className="w-100 " />
          </div>
          <div className="col-md-6 my-auto ">
            <h2 style={{ textAlign: "left" }} className=" fs-1 fw-bold ">
              What Is Online{" "}
              <span className="d-block" style={{ color: "#2405F2" }}>
                Learning ?
              </span>{" "}
            </h2>
            <p
              className="my-3 leading-7"
              style={{
                fontSize: "16px",
                color: "#28293899",
                textAlign: "left",
              }}
            >
              "Online learning has revolutionized education, offering
              flexibility and accessibility like never before. Through virtual
              classrooms, students can engage in learning from anywhere with an
              internet connection. This approach fosters a dynamic learning
              environment that caters to diverse needs and schedules."
            </p>
            <p
              className="my-3 leading-7"
              style={{
                fontSize: "16px",
                color: "#28293899",
                textAlign: "left",
              }}
            >
              "With online learning, individuals can pursue education while
              balancing other commitments such as work or family
              responsibilities. Additionally, the wealth of resources available
              online enriches the learning experience, providing multimedia
              content and interactive tools. In essence, online learning
              empowers learners to take control of their education journey,
              breaking down barriers to knowledge acquisition."
            </p>
            <a 
              target="_blank"
              href="https://www.workramp.com/blog/benefits-online-learning-platforms-for-business/"
              style={{ color: "#2405F2", textAlign: "left" }}
              className=" fs-5 underline"
            >
              Read more..
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
