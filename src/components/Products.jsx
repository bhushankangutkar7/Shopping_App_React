import React from "react";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { useSearchParams } from "react-router-dom";
import {
  getAllProducts,
  getProductsByCategory,
  getProductBySearch,
} from "../services/ProductServices.jsx";

const Products = () => {
  const [prodData, setProdData] = useState([]);
  const [searchParam] = useSearchParams();
  let cat = searchParam.get("category");
  let searchQuery = searchParam.get("searchQuery");
  // console.log(searchQuery);

  useEffect(() => {
    if (cat != null) {
      // console.log(cat);
      getProductsByCategory(cat)
        .then((res) => {
          // console.log(res.data.products);
          setProdData(res.data.products);
        })
        .catch((err) => console.log(err));
    } else if (searchQuery && searchQuery != "") {
      getProductBySearch(searchQuery)
        .then((res) => setProdData(res.data.products))
        .catch((err) => console.log(err));
    } else {
      // console.log(cat);
      getAllProducts()
        .then((res) => {
          // console.log(res.data.products);
          setProdData(res.data.products);
        })
        .catch((err) => console.error(err));
    }
  }, [cat, searchQuery]);

  return (
    <>
      <div className="container row gap-3 m-3">
        <h2>New Arrivals</h2>
        {prodData.length > 0 ? (
          prodData.map((product) => (
            <ProductList key={product.id} product={product} />
          ))
        ) : (
          <h4>Loading Data...</h4>
        )}
      </div>
    </>
  );
};

export default Products;
