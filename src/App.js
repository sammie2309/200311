import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ProductItem from "./components/productItem";
import "bootstrap/dist/css/bootstrap.css";
import { Router } from "@reach/router";
import AddProduct from "./components/addProduct";

function App() {
  return (
    <div className="container">
      <Router>
        <ProductItem path="/" />
        <AddProduct path="/add-new-product" />
      </Router>
    </div>
  );
}

export default App;
