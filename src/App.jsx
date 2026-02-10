import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import ProductDetails from "./pages/Products/ProductDetails.jsx";
import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column justify-content-around">
      <Router basename="/Shopping_App_React">
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route
              path="/product-details/:id"
              element={<ProductDetails />}
            ></Route>
          </Routes>
        </section>
        <Footer className="mt-auto"></Footer>
      </Router>
    </div>
  );
}

export default App;
