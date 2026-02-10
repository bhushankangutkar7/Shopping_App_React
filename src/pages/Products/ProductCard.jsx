import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem", height: "25rem"}} key={product.id}>
        <img
          src={product.thumbnail}
          className="card-img-top pt-2 pb-2"
          alt={product.title}
          style={{height: '40%'}}
        />
        <div className="card-body d-flex flex-column pt-2">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-truncate-2">{product.description}</p>
          <h5 className="card-price">${product.price}</h5>
          <NavLink
            to={`/product-details/${product.id}`}
            className="btn btn-warning mt-auto"
          >
            Know More...
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
