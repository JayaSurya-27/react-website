import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/routes/home.js";
import Services from "./components/routes/services.js";
import Products from "./components/routes/products.js";
import Signup from "./components/routes/signup.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
