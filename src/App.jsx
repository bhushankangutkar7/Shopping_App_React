import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column justify-content-around">
      <Router>
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route
              path="/product-details/:id"
              element={<ProductDetails />}
            ></Route>
            <Route path="/products/category/:slug"></Route>
            <Route path="/products/search?q=:searchQuery"></Route>
          </Routes>
        </section>
        <Footer className="mt-auto"></Footer>
      </Router>
    </div>
  );
}

export default App;
