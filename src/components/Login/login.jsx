import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div className="page ">
        <form className="form">
          <span className="logo">
            <i class="fas fa-border-all" />
          </span>
          <div className="form-group">
            <label for="username">
              <input
                type="username"
                className="input form-control"
                id="username"
                placeholder="Username"
              />
            </label>
          </div>
          <div className="form-group">
            <label for="Password">
              <input
                type="password"
                className="input form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </label>
          </div>
          <div className="form-check small">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" />
              <span>Remember me on this computer</span>
            </label>
          </div>
          <button type="submit" className="button btn btn-primary">
            Submit
          </button>
        </form>
        <div className="alt">
          <p>
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
