import React, { useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { getCategories } from "../services/ProductServices";
import { useState } from "react";

const Header = () => {
  const [catlist, setCatlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then((res) => {
        // console.log(res.data);
        setCatlist(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchQuery.trim() !== "") {
      navigate(`/products?searchQuery=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <h4 className="siteHeading"> ShopAll </h4>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {catlist.map((category, ind) => (
                  <li key={ind}>
                    <Link
                      className="dropdown-item"
                      to={`/products?category=${category.slug}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              htmlFor="searchButton"
              onKeyUp={(event) => {
                event.preventDefault();
                setSearchQuery(event.target.value);
                // console.log(searchQuery);
              }}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              id="searchButton"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
