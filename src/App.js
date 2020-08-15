import React, { useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import Animations from './js/Animations';
import './App.css';

function App() {
  let app = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } })
    console.log(app)
  })

  return (
    <div className="App" ref={el => app = el}>
      <Animations />
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
