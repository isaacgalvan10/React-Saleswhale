import React, { Component, Fragment } from 'react';
import '../styles/main.css'

class Main extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-lg">
          <section id="hero-section">
            <img src={require("../assets/hero-img.png")} />
            <div className="hero-container">
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
            <h1 className="titles csTrigger">Our Culture</h1>
            <p className="sub-header csTrigger">At Saleswhale, we encourage everyone to grow and innovate, while having fun in the process.</p>
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
            <p className="cta csTrigger2">If you are excited by our vision of the future, and want to solve meaningful problems, talk to us!</p>
            <button type="button" className="btn btn-primary csTrigger2">Join the team</button>
          </section>

          {/* Progress Section */}

          <section id="progress-section">
            <h1 className="titles">Our Progress</h1>

            <div className="progress-container">
              <div className="fifteen">
                <span className="year">2015</span>
                <img src={require("../assets/Group 412.png")} />
                <span className="info">Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong</span>
              </div>
              <div className="sixteen">
                <span className="year">2016</span>
                <img src={require("../assets/Group 412.png")} />
                <span className="info">Accepted into Y Combinator (S16) and moved to San Francisco</span>
              </div>
              <div className="seventeen">
                <span className="year">2017</span>
                <img src={require("../assets/Group 412.png")} />
                <span className="info">Raised US$1.2M in seed funding and hired core engineers</span>
              </div>
              <div className="nineteen">
                <span className="year">2019</span>
                <img src={require("../assets/Group 412.png")} />
                <span className="info">Raised US$5.3M in Series A and expanded team size</span>
              </div>
              <div className="twenty">
                <span className="year">2020</span>
                <img src={require("../assets/Group 412.png")} />
                <span className="info">Opened US office in Washington, DC and hired US sales team</span>
              </div>
              <div className="blue-line"></div>
            </div>
          </section>

          {/* Offices Section */}

          <section id="office-section">
            <h1 className="titles">Our Offices</h1>
            <div className="office-container">
              <div className="office-1">
                <img src={require("../assets/sinon 7.png")} />
                <h2>Singapore</h2>
                <p>155B Telok Ayer Street<br />Singapore, 068611</p>
              </div>
              <div className="office-2">
                <img src={require("../assets/sinon 7.png")} />
                <h2>Washington DC</h2>
                <p>1701 Rhode Island Ave NW<br />Washington, DC 20036</p>
              </div>
            </div>
          </section>

          {/* Investors Section */}

          <section id="investor-section">
            <h1 className="titles">Our Investors</h1>
            <div className="investor-row-1">
              <div className="card card-1">
                <img src={require("../assets/YC logo 2.png")} />
              </div>
              <div className="card card-2">
                <img src={require("../assets/MHV-logo 2.svg")} />
              </div>
            </div>
            <div className="investor-row-2">
              <div className="card card-3">
                <img src={require("../assets/STRIVE_logo 2.svg")} />
              </div>
              <div className="card card-4">
                <img src={require("../assets/wavemaker-350 2.svg")} />
              </div>
            </div>
          </section>

        </div>
        {/* Future Section */}

        <section id="future-section">
          <div className="future-container">
            <h1>See the future</h1>
            <button type="button" className="btn btn-light">Get a Demo</button>
            <button type="button" className="btn btn-outline-light">Read use cases</button>
          </div>
        </section>

        {/* Background imgs */}

        <img src={require("../assets/Vector 19.png")} className="bg-img-1" />
        <img src={require("../assets/Mask Group.png")} className="bg-img-2" />
      </Fragment>

    );
  }
}

export default Main;