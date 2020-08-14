import React, { Component, Fragment } from 'react';
import '../styles/footer.css';

class Footer extends Component {
  state = {}
  render() {
    return (
      <Fragment>
        <div className="container-lg">
          <div className="footer-container-1">
            <img src={require("../assets/sw-logo-full.png")} alt="" />
            <div className="link-container">
              <div className="link-column-1">
                <ul>
                  <li className="subtitle">Why Saleswhale</li>
                  <a href="#"><li>Collaborative Intelligence</li></a>
                  <a href="#"><li>AI Assistant Capabilities</li></a>
                  <a href="#"><li>Customer Stories</li></a>
                  <a href="#"><li>Use Case - Technology</li></a>
                  <a href="#"><li>Use Case - Education</li></a>
                  <a href="#"><li>Use Case - Events</li></a>
                </ul>
              </div>
              <div className="link-column-2">
                <ul>
                  <li className="subtitle">Product</li>
                  <a href="#"><li>AI Conversations</li></a>
                  <a href="#"><li>Lead Enrichment</li></a>
                  <a href="#"><li>Deal Intelligence</li></a>
                  <a href="#"><li>Workflow Intergration</li></a>
                </ul>
              </div>
              <div className="link-column-3">
                <ul>
                  <li className="subtitle">Company</li>
                  <a href="#"><li>About us</li></a>
                  <a href="#"><li>Blog</li></a>
                  <a href="#"><li>Rescources</li></a>
                  <a href="#"><li>Careers</li></a>
                  <a href="#"><li>Help Center</li></a>
                </ul>
              </div>
              <div className="link-column-4">
                <ul>
                  <li className="subtitle">Contact</li>
                  <li>hello@saleswhale.com</li>
                  <li className="subtitle">US Office</li>
                  <li>1701 Rhode Island Ave NW <br />Washington, DC 20036</li>
                  <li className="subtitle">Singapore Office</li>
                  <li>155B Telok Ayer Street <br />Singapore, 068611</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container-2">
          <div className="container-lg">
            <a href="#" className="privacy fcTrigger">Privacy</a>
            <a href="#" className="terms fcTrigger">Terms</a>
            <span className="copyright fcTrigger">© 2020 Saleswhale, Inc. All rights reserved</span>
            <div className="socialmedia">
              <a href="" className="facebook"><img src={require("../assets/Vector.png")} /></a>
              <a href="" className="linkedin"><img src={require("../assets/Vector (1).png")} /></a>
              <a href="" className="twitter"><img src={require("../assets/Vector (2).png")} /></a>
            </div>
          </div>
          <img className="bg-img" src={require("../assets/footer - waves.png")} alt="" />
        </div>
      </Fragment>
    );
  }
}

export default Footer;