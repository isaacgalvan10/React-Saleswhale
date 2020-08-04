import React, { Component, Fragment } from 'react';

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
          <img src="../assets/logomark.png" alt="" />
          <a className="navbar-brand" href="#">Saleswhale</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
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
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBar;