const About = () => {


return (
    <section id='about'>
        <h1>About Me</h1>
        <div className='about-me-flex'>
            <div className="about-me-box about-me-personal">
                <div className="table-top personal-top"><p>Facts About Me</p></div>
                <div className="table-content personal-content">
                    <p>
                        I have a cat called Jeffrey<br></br>
                        I studied guitar for 8 years<br></br>
                        and piano for 2 years<br></br>
                        I enjoy playing video games<br></br>
                    </p>
                </div>
            </div>
            <div className="about-me-box about-me-front">
                <div className="table-top front-top"><p>Front End Skills</p></div>
                <div className="table-content front-content">
                    <p>
                        HTML<br></br>
                        CSS<br></br>
                        JavaScript<br></br>
                        React<br></br>
                        Responsive Design<br></br>
                    </p></div>
            </div>
            <div className="break"></div>
            <div className="about-me-box about-me-back">
                <div className="table-top back-top"><p>Back End Skills</p></div>
                <div className="table-content back-content">
                    <p>
                        SQL<br></br>
                        PHP<br></br>
                        JavaScript<br></br>
                    </p></div>
            </div>
            <div className="about-me-box about-me-other">
                <div className="table-top other-top"><p>Other Skills<br></br>/Applications</p></div>
                <div className="table-content other-content">
                    <p>
                        GIT<br></br>
                        GitHub<br></br>
                        VS Code<br></br>
                    </p></div>
            </div>
        </div>
    </section>
)}


export default About;

