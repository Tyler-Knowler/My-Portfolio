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
                    <div className='current-number'><p id='display-num'></p></div>
                </div>
                <div className='calc-buttons'>
                    <button onClick={ClearClicked}  className='calc-button calc-function-top'>C</button>
                    <button onClick={FlipSign}      className='calc-button calc-function-top'>+ / -</button>
                    <button onClick={Percentage}    className='calc-button calc-function-top'>%</button>
                    <button onClick={ChosenFunc}        id='func_divide' className='calc-button calc-function-right'>÷</button>
                    <button onClick={NumberClicked} id='number_7' className='calc-button calc-number'>7</button>
                    <button onClick={NumberClicked} id='number_8' className='calc-button calc-number'>8</button>
                    <button onClick={NumberClicked} id='number_9' className='calc-button calc-number'>9</button>
                    <button onClick={ChosenFunc}      id='func_multiply' className='calc-button calc-function-right'>x</button>
                    <button onClick={NumberClicked} id='number_4' className='calc-button calc-number'>4</button>
                    <button onClick={NumberClicked} id='number_5' className='calc-button calc-number'>5</button>
                    <button onClick={NumberClicked} id='number_6' className='calc-button calc-number'>6</button>
                    <button onClick={ChosenFunc}      id='func_subtract' className='calc-button calc-function-right'>-</button>
                    <button onClick={NumberClicked} id='number_1' className='calc-button calc-number'>1</button>
                    <button onClick={NumberClicked} id='number_2' className='calc-button calc-number'>2</button>
                    <button onClick={NumberClicked} id='number_3' className='calc-button calc-number'>3</button>
                    <button onClick={ChosenFunc}      id='func_add' className='calc-button calc-function-right'>+</button>
                    <button onClick={NumberClicked} id='number_0' className='calc-button calc-number num-0'>0</button>
                    <button onClick={NumberClicked} id='number_.' className='calc-button calc-number'>.</button>
                    <button onClick={Sum}           className='calc-button calc-function-right'>=</button>
                </div>
            </div>
        </section>
    </div>
    );
}
    
export default Calc;




var functionClicked;
var previousChoice;
var previousNumber;
var negativeCheck;
var perdiodCheck;
var numLength;
var oldNum;
var newNum;
var id;

function NumberClicked(buttonid) {
    id = buttonid.target.getAttribute('id')
    const idArray = id.split("_");
    id = idArray[1];
    oldNum = document.getElementById("display-num").innerHTML;
    if (id === '.') {
        perdiodCheck = oldNum.includes(".");
        if (perdiodCheck === false) {
            numLength = oldNum.length;
            if (numLength === 0) {
                newNum = oldNum.concat('0',id);
            } else {
                newNum = oldNum.concat(id);
            }
            document.getElementById("display-num").innerHTML = newNum; 
        }
    } else {
        newNum = oldNum.concat(id);
        document.getElementById("display-num").innerHTML = newNum; 
    }
}

function ClearClicked() {
    document.getElementById("display-num").innerHTML = '';
}

function FlipSign() {    
    oldNum = document.getElementById("display-num").innerHTML;
    numLength = oldNum.length;
    if (numLength > 0) {
        negativeCheck = oldNum.includes("-");
        if (negativeCheck === false) {
            newNum = "-".concat(oldNum);
            document.getElementById("display-num").innerHTML = newNum; 
        } else {
            const numArray = oldNum.split("-");
            newNum = numArray[1];
            document.getElementById("display-num").innerHTML = newNum; 
        }
    }
}

function Percentage() {    
    oldNum = document.getElementById("display-num").innerHTML;
    numLength = oldNum.length;
    if (numLength > 0) {
        newNum = oldNum/100;
        document.getElementById("display-num").innerHTML = newNum; 
    }
}

function ChosenFunc(buttonid) {
    previousNumber = document.getElementById("display-num").innerHTML
    functionClicked = buttonid.target.getAttribute('id')
    const FCArray = functionClicked.split("_");
    functionClicked = FCArray[1];
    alert(previousNumber +"\n"+ functionClicked);
}

function Sum() {

}