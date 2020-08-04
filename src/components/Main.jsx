import React, { Component } from 'react';
import '../styles/main.css'

class Main extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <section id="hero-section">
          <img src={require("../assets/hero-img.png")} />
          <div className="grid-container">
            <h1>
              A future where AI and humans work hand in hand
            </h1>
            <div className="paragraph">
              <p>At Saleswhale, we believe that the future of work is Collaborative Intelligence - where machines and AI help humans fulfil their highest potential by automating drudgery and producing for more effective results.</p>
              <p>AI assistants help to automate repetitive and mundane tasks so that us humans focus on creative, high-impact work that creates value and inspires. The result? Happier and more productive teams doing meaningful work.</p>
              <p>Our mission is to put an AI assistant in every company that could greatly benefit from it, and we're starting off strong addressing this need in marketing and sales teams all across the world.</p>
              <p>The future is where AI and humans work hand in hand, and we’re here to help businesses benefit from that.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;