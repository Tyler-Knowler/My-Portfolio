import React from 'react';

import './css/index.css';

import Home from './Home.js';
import Calc from './components/calc/calc.js';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route path="/calculator"  element={<Calc/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
