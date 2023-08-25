import { useState } from 'react'
import '../CSSNav.css';
import SignatureWhite from '../img/SignatureWhite.png';

const Nav = () => {
  const [colorChange, setColourchange] = useState(false);
  const changeNavbarColour = () => {
      if (window.scrollY >= 950) {
        setColourchange(true);
      }
      else {
        setColourchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColour);
  return (
    <div className={colorChange ? 'navBar-full colourChange' : 'navBar-full'}>
      <div className='navBar'>
        <div className='logo navLeft'><a href='/#'><img src={SignatureWhite} className='logo navElement' alt='logo'></img></a></div>
        <nav className='navMid'>
          <a className='navElement' href='#about'>About Me</a>
          <a className='navElement' href='#projects'>My Projects</a>
        </nav>
        <div className='navRight navElement'><a href='#contact'>Contact</a></div>
      </div>
    </div>
  );
}

export default Nav;
