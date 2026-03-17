
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

  // Convert slug to Title Case for heading
  function getHeading() {
    if (cat) {
      return cat
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    return "New Arrivals";
  }

  useEffect(() => {
    if (cat != null) {
      getProductsByCategory(cat)
        .then((res) => {
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
      <div className="products-container-fluid">
        <h2 className="products-heading">{prodData.length > 0 && getHeading()}</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center w-100 m-3" style={{gap: '1.5rem'}}>
          {prodData.length > 0 ? (
            prodData.map((product) => (
              <ProductList key={product.id} product={product} />
            ))
          ) : (
            <div className="d-flex flex-column align-items-center mb-3">
              <h4>Loading Products...</h4>
              <div className="spinner-border text-primary mt-3"  style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
