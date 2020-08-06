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

        {/* Culture Section */}

        <section id="culture-section">
          <h1>Our Culture</h1>
          <p className="sub-header">At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process.</p>
          <div className="culture-container">
            <div className="culture1">
              <img src={require("../assets/you_glasses 4.png")} />
              <h4>Building for the future</h4>
              <span>We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users.</span>
            </div>
            <div className="culture2">
              <img src={require("../assets/you_glasses 4.png")} />
              <h4>Promoting trust & transparency</h4>
              <span>We remain completely open, honest and transparent with everyone. This has allowed us to build strong relationships with each other.</span>
            </div>
            <div className="culture3">
              <img src={require("../assets/you_glasses 4.png")} />
              <h4>Achieving our very best</h4>
              <span>We believe the success of the company lies within our employees and we constantly challenge each other to learn and level up.</span>
            </div>
          </div>
          <p className="cta">If you are excited by our vision of the future, and want to solve meaningful problems, talk to us!</p>
          <button type="button" class="btn btn-primary">Join the team</button>
        </section>
      </div>
    );
  }
}

export default Main;