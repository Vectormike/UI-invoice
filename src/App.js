import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home/home";
import Register from "./components/Registration/register";
import Login from "./components/Login/login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/signin" component={Login} />
    </div>
  );
}

export default App;
