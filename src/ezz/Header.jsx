"use clientS";
import "./Header.css";
import polygon from "./images/Polygon 4.svg";
import { useParams } from "react-router-dom";

import NavBar from "../components/NavBar";
import { PRODCUTS } from "../../../data";

const Header = () => {
  const { id } = useParams();
  const data = PRODCUTS[id-1];
  // const [data, setData] = useState(null);

  // const getData = () => {
  //   fetch(`http://localhost:3000/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <NavBar />
      {data ? (
        <div className="internalPage container mx-auto px-32  my-5 ">
          <div className="headers mb-5 ">
            <h3 className="mb-3 text-2xl">{data.description}</h3>
            <h1 className="mb-3 text-4xl font-semibold">{data.title}</h1>
            <h5 className=" text-black-50">{data.category}</h5>
          </div>
          <div className="position-relative mb-5">
            <img
              async
              src={data.image}
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
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Header;
