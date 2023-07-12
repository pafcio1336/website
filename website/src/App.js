import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Navigation from "./components/Nav/Navigation";
import Home from "./components/Home/Home";
import AboutMe from "./components/About/AboutMe";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ShoppingCart from "./components/Projects/ShoppingCart/ShoppingCart";
import "./App.js";
import "./App.scss";
import "./components/Nav/Navigation.scss";
import "./components/Button/Button.scss";
import ProductDetail from "./components/Projects/ShoppingCart/ShoppingContainer/ProductDetail/ProductDetail";
import ShoppingContainer from "./components/Projects/ShoppingCart/ShoppingContainer/ShoppingContainer";
import Test from "./components/Projects/ShoppingCart/ShoppingContainer/ProductsList/Test";

function App() {
  useEffect(() => {});
  return (
    <div className="main__container">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route exact path="/Skill" element={<Skills />} />
          <Route exact path="/Projects" element={<Projects />}>
            <Route
              exact
              path="/Projects/ShoppingCart"
              element={<ShoppingCart />}
            >
              <Route
                exact
                path="/Projects/ShoppingCart/ShoppingContainer"
                element={<ShoppingContainer />}
              >
                <Route
                  exact
                  path="/Projects/ShoppingCart/ShoppingContainer/ProductDetail"
                  element={<ProductDetail />}
                />
              </Route>
            </Route>
          </Route>
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
