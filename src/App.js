import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './css/index.css';

import Home from './Home.js';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/"  element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
