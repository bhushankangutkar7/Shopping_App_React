import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import Spinner from "../../components/Spinner.jsx";
import ProductCardSkeleton from "./ProductCardSkeleton.jsx";
import { useSearchParams } from "react-router-dom";
import {
  getAllProducts,
  getProductsByCategory,
  getProductBySearch,
} from "../../services/ProductServices.jsx";

const Products = () => {
  const [prodData, setProdData] = useState([]);
  const [searchParam] = useSearchParams();
  const [ loading, setLoading] = useState(false);
  let cat = searchParam.get("category");
  let searchQuery = searchParam.get("searchQuery");
  // console.log(searchQuery);

  const capitalizeFirstLetter = (string) => {
    if (string == null || string == undefined) return "";
  
    return string
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const SKELETON_COUNT = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        if (cat) {
          const res = await getProductsByCategory(cat);
          setProdData(res.data.products);
        } else if (searchQuery) {
          const res = await getProductBySearch(searchQuery);
          setProdData(res.data.products);
        } else {
          const res = await getAllProducts();
          setProdData(res.data.products);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [cat, searchQuery]);


  return (
    <>
      <div className="container-fluid m-4 d-flex flex-column align-items-center flex-wrap h-100"
      >
        <h2 className="text-center">
          {loading ? (
            <span
              className="placeholder-glow d-inline-block"
              style={{ width: "200px", height: "1.5rem" }}
              aria-hidden="true"
            >
              <span className="placeholder col-12"></span>
            </span>
          ) : (
            capitalizeFirstLetter(cat) || "New Arrivals"
          )}
        </h2>

        <div className="container-fluid row gap-5 p-4 justify-content-center w-100">
          {loading
            ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))
            : prodData.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Products;
