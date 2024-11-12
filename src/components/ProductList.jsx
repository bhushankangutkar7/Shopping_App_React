import React from "react";
import { NavLink } from "react-router-dom";

const ProductList = ({ product }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }} key={product.id}>
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <h5 className="card-price">${product.price}</h5>
          <NavLink
            to={`/product-details/${product.id}`}
            className="btn btn-primary mt-auto"
          >
            Know More...
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ProductList;
