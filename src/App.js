import m51 from './m51.jpg';
import './App.css';
import React, { Component } from 'react';
import MainNavBar from './components/mainNavBar';
import MainFooter from './components/mainFooter';

function App() {
  return (
    <div className="App">
      <MainNavBar className="App-navbar"/>
      <header className="App-header">
        <img src={m51} className="App-header-image" alt="logo" />
        <p f="small">
          This is a WIP professional page. Stay tuned!
        </p>
      </header>
      <MainFooter />
    </div>
  );
}

export default App;
