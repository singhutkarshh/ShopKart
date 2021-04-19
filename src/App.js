import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/about";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Products from "./pages/products";
import Error from "./pages/error";
import Details from "./Components/details";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
