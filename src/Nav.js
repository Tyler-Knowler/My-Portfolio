import React, { useState } from 'react'
import signature from './signature.png';
import './CSSNav.css';

const Nav = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 950) {
          setColorchange(true);
      }
      else {
          setColorchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className={colorChange ? 'navBar-full colorChange' : 'navBar-full'}>
      <div className='navBar'>
        <div className='grid'>
          <div className='logo navLeft'><a href='/'><img src={signature} className='logo' alt='logo'></img></a></div>
          <nav className='navMid'>
          <a href='#about' className='navMid'>About Me</a>
          <a href='#projects' className='navMid'>My Projects</a>
          </nav>
          <a href='#contact' className='navRight'>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
