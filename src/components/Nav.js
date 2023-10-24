import { useState } from 'react'
import '../css/CSSNav.css';

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
    <div className={colorChange ? 'navBar-full colourChange' : 'navBar-full colorChange2'}>
      <div className='navBar'>
        <div className='navLeft navElement'><a href='/#'><p className='nav-hover'>Home</p></a></div>
        <nav className='navMid'>
          <a className='navElement' href='#about'><p className='nav-hover'>About Me</p></a>
          <a className='navElement' href='#projects'><p className='nav-hover'>My Projects</p></a>
        </nav>
        <div className='navRight navElement'><a href='#contact'><p className='nav-hover'>Contact</p></a></div>
      </div>
    </div>
  );
}

export default Nav;
