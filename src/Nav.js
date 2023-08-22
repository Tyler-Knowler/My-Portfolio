import signature from './signature.png';
import './Nav.css';

function Nav() {
  return (
    <div className='navBar'>
      <div className='grid'>
        <div className='logo navLeft'><a href='/'><img src={signature} className='logo' alt='logo'></img></a></div>
        <nav className='navMid'>
        <a href='#About' className='navMid'>About Me</a>
        <a href='#Projects' className='navMid'>My Projects</a>
        </nav>
        <a href='#Contact' className='navRight'>Contact</a>
      </div>
    </div>
  );
}

export default Nav;
