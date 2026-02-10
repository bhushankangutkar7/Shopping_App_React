import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/ProductServices";
import { NavLink } from "react-router-dom";

const ProductDetails = () => {
  const [prodDetails, setProdDetails] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    getProductById(id)
      .then((res) => {
        console.log(res.data);
        setProdDetails(res.data);
        console.log(prodDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let originalPrice;
  if (prodDetails != null) {
    const discountedPrice = prodDetails.price;
    const discountPercentage = prodDetails.discountPercentage;
    originalPrice = Math.round(
      discountedPrice / (1 - discountPercentage / 100)
    );
    console.log(originalPrice); // Outputs: 159.99
  }

  return (
    <div className="container productDetailsMainContainer p-4">
      {prodDetails != null && (
        <>
          <h2 className="productDetails">Product Details</h2>
          <br />
          <div className="d-flex flex-row">
            <div className="imagesContainer d-flex flex-column">
              <img
                className="thumbnailImg"
                style={{ height: "400px", margin: "0", padding: "0" }}
                src={prodDetails.thumbnail}
                alt={prodDetails.title}
              />

              <ul className="d-flex " style={{ listStyle: "none" }}>
                {prodDetails.images.map((imageUrl, ind) => (
                  <li key={ind}>
                    <NavLink>
                      <img
                        className="ulImages"
                        src={imageUrl}
                        style={{ height: "100px", margin: "3px" }}
                      />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="m-4 p-3">
              <div id="productDes">
                <h2 className="productName">{prodDetails.title}</h2>
                <p className="productDescription">{prodDetails.description}</p>
                <NavLink className="text-decoration-none" path="/">
                  Visit to "{prodDetails.brand}" Store
                </NavLink>
                <span>
                  <h6>Rating - {prodDetails.rating}</h6>
                  <br />
                  <hr />
                  <h3>
                    Price - ${prodDetails.price}.&nbsp;&nbsp;
                    <NavLink
                      className="text-decoration-none emiOptions"
                      path="/"
                    >
                      EMI Options
                    </NavLink>
                  </h3>
                  <p>
                    Discount : {prodDetails.discountPercentage}% off. &nbsp;
                    <s>M.R.P. -{originalPrice}</s>
                    <br />
                    Inclusive all Taxes
                    <br />
                    With Bulk orders you can save more
                  </p>
                  <br />
                  <hr />
                  <h4>Offers</h4>
                  <p>
                    This product is available at{" "}
                    {prodDetails.discountPercentage}% off.
                    <br />
                    <NavLink to="#">Check Credit Card Offers</NavLink>
                  </p>
                  <br />
                  <button className="btn btn-warning">
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>
                    Add To Cart
                  </button>{" "}
                  &nbsp;&nbsp;
                  <button className="btn btn-secondary">
                    <span className="material-symbols-outlined">bookmark</span>
                    &nbsp;Save for Later
                  </button>
                </span>
              </div>
              <br />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
