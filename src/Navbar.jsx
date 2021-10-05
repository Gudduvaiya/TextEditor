import React from "react";
// import About from "./About"; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
let Navi = () => {
  return (
    <React.Fragment>
    <Router>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "black"}}
      >
        <div className="container-fluid" style={{ color: "white" }}>
          <Link className="navbar-brand" to="/"style={{color: "white"}}>
            Panda
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item" >
                <Link className="nav-link active" aria-current="page" to="/" style={{color: "white"}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{color: "white"}}>
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{color: "white"}}>
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/" >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About" style={{color: "white"}}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  to="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-info" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      </Router>
    </React.Fragment>
  );
};
export default Navi;
