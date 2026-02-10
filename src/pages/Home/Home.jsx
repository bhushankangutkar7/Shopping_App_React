import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <br />
      <h1>Home</h1>
      <br />
      <p className="homeParagraph">
        &emsp;&emsp;Welcome to ShopAll, your ultimate shopping destination for
        everything you need and love! From the latest fashion trends and
        cutting-edge electronics to home essentials, beauty products, and unique
        gifts, we offer an extensive selection of high-quality items all in one
        place. At ShopAll, we’re committed to providing an exceptional shopping
        experience with competitive prices, exclusive deals, and fast, reliable
        delivery right to your door. With easy navigation, secure payment
        options, and a customer-first approach, shopping has never been more
        convenient or enjoyable. Plus, our dedicated customer service team is
        always here to help with any questions or concerns. Explore, discover,
        and shop with confidence — because at ShopAll, we make shopping simple,
        exciting, and tailored to you!
        <br/> 
        <br/> 
        <NavLink to="/products" className="btn btn-warning">
          Shop Now
        </NavLink>
      </p>
      <br />
    </div>
  );
};

export default Home;
