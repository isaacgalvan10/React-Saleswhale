import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import Animations from './js/Animations';
import './App.css';

function App() {
  return (
    <div className="App">
      <Animations />
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
