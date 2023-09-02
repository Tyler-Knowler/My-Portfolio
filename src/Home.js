import React from 'react';

import './css/CSSHome.css';

import Nav from './components/Nav';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';

function Home() {
  return (
    <React.StrictMode>
      <Nav />
      <div className='main-div'>
        <section className='initialSection'>
          <div>Welcome!<br></br>Come take a look around</div>
        </section>
          <About />
          <Projects />
          <Contact />
      </div>
    </React.StrictMode>
  );
}

export default Home;
