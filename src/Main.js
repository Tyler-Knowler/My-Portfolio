import './CSSMain.css';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import React from 'react';

function Main() {
  return (

    <div className='main-div'>
      <section className='initialSection'>
        <div>Welcome!<br></br>Come take a look around</div>
      </section>
      <React.StrictMode>
        <About />
        <Projects />
        <Contact />
      </React.StrictMode>
    </div>
  );
}

export default Main;
