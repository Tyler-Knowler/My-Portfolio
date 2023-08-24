import './CSSMain.css';
import placeholder from './placeholder.jpg';

function Main() {

  return (
    <div className='main-div'>
      <section className='initialSection'>
        <div>Welcome!<br></br>Come take a look around</div>
      </section>
      <section id='about'>
        <div className='about-me-image-div'><img src={placeholder} className='about-me-image' alt='logo'></img></div>
        <div className='about-me-text'>
          <div className='grid-2'>
              <h1>About Me</h1>
              <span><p>I'm Tyler, a beginner in Web Development, trying to figure out how this stuff works :)</p>
              <p>I currently work as a Residential Support Worker and previously as a Learning Support Worker. I learnt a lot while working in these positions and I enjoyed them thoroughly, however, I have always had a passion for computers and I want to begin a career in Web Development.</p>
              <p>I wanted to make this page as I wanted to learn how to use Node.js and React, so I thought how better than making a website where I can show the different projects I've made on this journey.</p>
              <p>My goal for this is to imrpove my skills in web development and to display what I'm capable of doing.</p></span>
            </div>
        </div>
      </section>
      <section id='projects'>
        <div className='my-projects-text'>
          <div>
            <h1>My Projects</h1>
            <p>Here is a list of some projects which I have made as well as the most recent version of all of them.</p>
          </div>
        </div>
        <div className='my-projects-boxes'>
          <div className='project-box'>Example 1</div>
          <div className='project-box'>Example 2</div>
          <div className='project-box'>Example 3</div>
          <div className='project-box'>Example 4</div>
          <div className='project-box'>Example 5</div>
          <div className='project-box'>Example 6</div>
          <div className='project-box'>Example 7</div>
          <div className='project-box'>Example 8</div>
        </div>
      </section>
      <section id='contact'>
        <div className='contact-me-text'>
          <div>
            <h1>Contact Me</h1>
            <p>Feel free to send me a message with any questions and I'll get back to you as soon as I can.</p>
          </div>
        </div>
        <div className='contact-form-container'>
          <form className='contact-form'>
            Name
            <input type="text" />
            Email
            <input type="email" />
            Message
            <textarea />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Main;
