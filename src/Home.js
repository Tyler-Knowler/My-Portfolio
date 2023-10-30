import React from 'react';

import './css/CSSHome.css';

import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ContactVerify from './components/ContactVerify';


function Home() {
  return (
    <React.StrictMode>
      <Nav />
      <ContactVerify />
      <div className='main-div'>
        <section className='initialSection'>
          <div className='initialText'><p className='topText'>Hi! I'm <span className='initialName'>Tyler,</span></p><p className='bottomText'>a full-stack web developer.</p></div>
        </section>
          <About />
          <Projects />
          <Contact />
      </div>
    </React.StrictMode>
  );
}

export default Home;
