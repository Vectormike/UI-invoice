import React from "react";

function Home() {
  return (
    <div className="">
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
              <span className="navbar-toggler-icon" />
            </button>
            <span className="logo">
              <i className="fas fa-file-invoice" />
            </span>
            <span className="signin">
              <h5>Sign in</h5>
            </span>
          </div>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
      </div>
      <div className="center-div container">
        <div className="">
            <p>Duis id qui aliqua est et et dolor minim minim in ipsum ut tempor.</p>
            <span><button>Get Started</button></span>
        </div>
      </div>
    </div>
  );
}
export default Home;
