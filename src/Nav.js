import signature from './signature.png';
import './CSSNav.css';

function Nav() {
  return (
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
  );
}

export default Nav;
