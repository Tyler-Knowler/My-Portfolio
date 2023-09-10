import CalcImage from '../img/CalcImage.png';

const Projects = () => {

return (
    <section id='projects'>
        <div className='my-projects-text'>
            <div>
                <h1>My Projects</h1>
                <p>Here is a list of some projects which I have made as well as the most recent version of all of them.</p>
            </div>
        </div>
        <div className="my-projects-boxes-flex">
            <div className='my-projects-boxes'>
                <div className='project-box'><a href="/calculator"><img src={CalcImage} className='project-image' alt='logo'></img><span className='project-title-span'></span><p className='project-title'>Standard Calculator</p></a></div>
                <div className='project-box'><a href="/leaguecalc"><img src={CalcImage} className='project-image' alt='logo'></img><span className='project-title-span'></span><p className='project-title'>LoL Calculator</p></a></div>
                <div className='project-box'>Example 3</div>
                <div className='project-box'>Example 4</div>
                <div className='project-box'>Example 5</div>
                <div className='project-box'>Example 6</div>
                <div className='project-box'>Example 7</div>
                <div className='project-box'>Example 8</div>
            </div>
        </div>
    </section>
)}

export default Projects;