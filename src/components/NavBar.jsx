import React, { Component } from 'react';
import '../styles/navbar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-brand">
            <a href="#">
              <img
                src={require("../assets/logomark.png")}
                width="25"
                height="25"
                alt="saleswhale logo"
                loading="lazy"
              />
            </a>
            <a className="navbar-brand saleswhale" href="#">saleswhale</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Why Saleswhale?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Company</a>
              </li>
            </ul>
            <button className="btn btn-outline-primary" type="submit">Log In</button>
            <button type="button" className="btn btn-primary">Get a Demo</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;