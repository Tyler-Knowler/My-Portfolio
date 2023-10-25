const About = () => {


return (
    <section id='about'>
        <h1>About Me</h1>
        <div className='about-me-flex'>
            <div className="about-me-box about-me-personal">
                <div className="table-top personal-top"><p>About Me</p></div>
                <div className="table-content personal-content"></div>
            </div>
            <div className="about-me-box about-me-front">
                <div className="table-top front-top"><p>Front End Skills</p></div>
                <div className="table-content front-content"></div>
            </div>
            <div className="break"></div>
            <div className="about-me-box about-me-back">
                <div className="table-top back-top"><p>Back End Skills</p></div>
                <div className="table-content back-content"></div>
            </div>
            <div className="about-me-box about-me-other">
                <div className="table-top other-top"><p>Other Skills</p></div>
                <div className="table-content other-content"></div>
            </div>
        </div>
    </section>
)}


export default About;

