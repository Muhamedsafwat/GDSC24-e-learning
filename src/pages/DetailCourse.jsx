import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../ezz/Header";
import Button from "../ezz/Button";

export default function DetailCourse() {
  // const [product, setProduct] = useState();
  // let {id}  = useParams();
  // async function getSata() {
  //   let response = await axios.get(`http://localhost:3000/products/${id}`);
  //   setProduct(response);
  // }
  // useEffect(() => {
  //   getSata();
  // }, []);
  // console.log(id);
  // console.log(product);
  return (
    <div className="container ">
      <div className="row">
        <Header />
        <Button />
      </div>
    </div>
  );
}
