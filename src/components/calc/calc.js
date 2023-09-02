import './calc.css';

import ProjectsNav from'../ProjectsNav.js';

const Calc = () => {

    return (
    <div>
        <ProjectsNav />
        <section id='calc'>
            <div className='calc-wrapper'>
                <div className='calc-screen'>
                    <div className='previous-entry'><p></p></div>
                    <div className='current-number'><p></p></div>
                </div>
                <div className='calc-buttons'>
                    <button onClick={ClearClicked}  className='calc-button calc-function-top'>C</button>
                    <button onClick={FlipSign}      className='calc-button calc-function-top'>+ / -</button>
                    <button onClick={Percentage}    className='calc-button calc-function-top'>%</button>
                    <button onClick={Divide}        className='calc-button calc-function-right'>÷</button>
                    <button onClick={NumberClicked} className='calc-button calc-number'>9</button>
                    <button onClick={NumberClicked} className='calc-button calc-number'>8</button>
                    <button onClick={NumberClicked} className='calc-button calc-number'>7</button>
                    <button onClick={Multiply}      className='calc-button calc-function-right'>x</button>
                    <button onClick={NumberClicked} className='calc-button calc-number'>6</button>
                    <button onClick={NumberClicked} className='calc-button calc-number'>5</button>
                    <button onClick={NumberClicked} className='calc-button calc-number'>4</button>
                    <button onClick={Subtract}      className='calc-button calc-function-right'>-</button>
                    <button onClick={NumberClicked} className='calc-button calc-number'>3</button>
                    <button onClick={NumberClicked} className='calc-button calc-number'>2</button>
                    <button onClick={NumberClicked} className='calc-button calc-number'>1</button>
                    <button onClick={Addition}      className='calc-button calc-function-right'>+</button>
                    <button onClick={NumberClicked} className='calc-button calc-number num-0'>0</button>
                    <button onClick={NumberClicked} className='calc-button calc-number'>.</button>
                    <button onClick={Sum}           className='calc-button calc-function-right'>=</button>
                </div>
            </div>
        </section>
    </div>
    );
}
    
export default Calc;

function NumberClicked() {

}

function ClearClicked() {

}

function FlipSign() {

}

function Percentage() {

}

function Divide() {

}

function Multiply() {

}

function Subtract() {

}

function Addition() {

}

function Sum() {

}