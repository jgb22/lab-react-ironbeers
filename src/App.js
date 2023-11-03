import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import AllBeers from "./components/AllBeers"
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
            <Route path="/beers" element={<AllBeers />} />
            <Route path="/beers/:beerId" element={<SingleBeer />} />
            <Route path="/random-beer" element={<RandomBeer />} />
          </Routes>
          
        </BrowserRouter>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       
      </header>
    </div>
  );
}

export default App;
