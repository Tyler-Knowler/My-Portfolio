import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './css/index.css';

import Home from './Home.js';
import Calc from './components/calc/calc.js';
import LoLCalc from './components/lolcalc/lolcalc.js';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route path="/calculator"  element={<Calc/>} />
          <Route path="/leaguecalc"  element={<LoLCalc/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
