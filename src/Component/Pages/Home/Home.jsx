import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProductDetails from "./Product";
import { addproduct } from "../../../Store/Cartslice";
const Home = () => {
  const dispatch = useDispatch();
  const [mydata, setmydata] = useState([]);

  const loadData = async () => {
    let url = "http://localhost:5000/products";
    const d = await axios.get(url);
    dispatch(addproduct(d.data));
    setmydata(d.data); 
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mydata &&
            mydata.map((item, index) => (
              <ProductDetails product={item} key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
