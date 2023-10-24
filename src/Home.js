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
          <div>Hi! I'm <span className='initialName'>Tyler,</span><br></br>an aspiring full-stack web developer.</div>
        </section>
          <About />
          <Projects />
          <Contact />
      </div>
    </React.StrictMode>
  );
}

export default Home;
