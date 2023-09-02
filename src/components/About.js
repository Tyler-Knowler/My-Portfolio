import Placeholder from '../img/Placeholder.jpg';

const About = () => {

return (
    <section id='about'>
        <div className='about-me-image-div'><img src={Placeholder} className='about-me-image' alt='logo'></img></div>
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
)}
    
export default About;