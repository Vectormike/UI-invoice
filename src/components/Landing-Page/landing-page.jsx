import React from "react";
import { Link } from "react-router-dom";
import "./landing-page.css";

function LandingPage() {
  return (
    <div className="">
      <div className="firstpage">
        <div className="pos-f-t">
          <nav className="navbar navbar-light bg-light">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <i class="fas fa-bars" />
                </span>
              </button>
              <span className="logo">
                <i class="fas fa-border-all" />
              </span>
              <Link to="/signin">
                <span className="signin">
                  <h6>Sign in</h6>
                </span>
              </Link>
            </div>
          </nav>
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              <h5 className="text-white h4">Collapsed content</h5>
              <span className="text-muted">
                Toggleable via the navbar brand.
              </span>
            </div>
          </div>
        </div>
        <div className="center-div container">
          <div className="">
            <Link to="/register">
              <span>
                <button>Get Started</button>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
