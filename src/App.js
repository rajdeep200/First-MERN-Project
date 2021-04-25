import React from "react";
import Navbar from "./component/NavBar/navbar";
import Home from "./component/Home/home";
import Contact from "./component/Contact/contact";
import About from "./component/About/about";
import Login from "./component/Login/login";
import Signup from "./component/SignUp/signup";
import Logout from "./component/logout/logout";
import "./App.css";
import { Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
    </div>
  );
}

export default App;
