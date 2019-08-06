import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./register.css";

class Register extends Component {
  render() {
    return (
      <div className="register-page container">
        <div>
          <h1>Create an account</h1>
          <hr />
        </div>
        <form className="">
          <div class="form-group">
            <label for="exampleInputEmail1">
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email address"
              />
            </label>
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="username">
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="username"
              />
            </label>
          </div>
          <div class="form-group">
            <label for="password">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="password"
              />
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <hr />
          <div className="alt">
            <p>
              Already have an account?
              <Link to="/signin"> Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
