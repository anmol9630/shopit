import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) { 
      setFilterProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilterProducts([]);
    }
  }, [searchQuery, products, setSearchQuery]);

  const navigate = useNavigate();

  const tab = (id) => {
    navigate("/show-product/" + id);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full h-12 p-2 mb-4 border border-black text-black rounded-xl shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => tab(product.id)}
            className="bg-blue-100 rounded-lg shadow-md overflow-hidden cursor-pointer"
          >
            <img
              className="w-full h-48 object-contain bg-white p-4"
              src={product.image}
              alt={product.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-blue-800">
                {product.title}
              </h2>
              <p className="text-lg text-blue-600 mt-2">${product.price}</p>
              <p className="text-gray-700 mt-2">{product.description}</p>
              <p className="text-blue-600 mt-2">{product.category}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">{product.rating.rate}⭐</span>
                <span className="ml-2 text-gray-600">
                  ({product.rating.count} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
