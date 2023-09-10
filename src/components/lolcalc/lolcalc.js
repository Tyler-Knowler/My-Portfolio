import React from 'react';

import './lolcalc.css';

import ProjectsNav from'../ProjectsNav.js';

const LoLCalc = () => {

    return (
    <div>
        <ProjectsNav />
        <section id='lolcalc'>
            <div className='nav'>
                <button className='link' onClick={displayChamp}></button>
            </div>
            
            
            <section id='calc-display'>
            </section>
        </section>
    </div>
    );
}
    
export default LoLCalc;


function displayChamp() {
    this.props.history.push('/foo');
}