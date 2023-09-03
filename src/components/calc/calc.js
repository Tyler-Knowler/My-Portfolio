import './calc.css';

import ProjectsNav from'../ProjectsNav.js';

const Calc = () => {

    return (
    <div>
        <ProjectsNav />
        <section id='calc'>
            <div className='calc-wrapper'>
                <div className='calc-screen'>
                    <div className='previous-entry'><p id='previous-num'>1415</p></div>
                    <div className='current-number'><p id='display-num'>0</p></div>
                </div>
                <div className='calc-buttons'>
                    <button onClick={ClearClicked}  id='clear-display' className='calc-button calc-function-top'>C</button>
                    <button onClick={FlipSign}      className='calc-button calc-function-top'>+ / -</button>
                    <button onClick={Percentage}    className='calc-button calc-function-top'>%</button>
                    <button onClick={ChosenFunc}    id='func_divide' className='calc-button calc-function-right'>÷</button>
                    <button onClick={NumberClicked} id='number_7' className='calc-button calc-number'>7</button>
                    <button onClick={NumberClicked} id='number_8' className='calc-button calc-number'>8</button>
                    <button onClick={NumberClicked} id='number_9' className='calc-button calc-number'>9</button>
                    <button onClick={ChosenFunc}    id='func_multiply' className='calc-button calc-function-right'>x</button>
                    <button onClick={NumberClicked} id='number_4' className='calc-button calc-number'>4</button>
                    <button onClick={NumberClicked} id='number_5' className='calc-button calc-number'>5</button>
                    <button onClick={NumberClicked} id='number_6' className='calc-button calc-number'>6</button>
                    <button onClick={ChosenFunc}    id='func_subtract' className='calc-button calc-function-right'>-</button>
                    <button onClick={NumberClicked} id='number_1' className='calc-button calc-number'>1</button>
                    <button onClick={NumberClicked} id='number_2' className='calc-button calc-number'>2</button>
                    <button onClick={NumberClicked} id='number_3' className='calc-button calc-number'>3</button>
                    <button onClick={ChosenFunc}    id='func_add' className='calc-button calc-function-right'>+</button>
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
var functionSymbol;
var previousNumber;
var currentNumber;
var negativeCheck;
var perdiodCheck;
var sumCompleted;
var displayNum;
var clearType;
var numLength;
var sumCheck;
var oldNum;
var newNum;
var id;

function NumberClicked(buttonid) {
    document.getElementById("clear-display").innerHTML = 'C';

    if (sumCompleted === true) {
        document.getElementById("display-num").innerHTML = 0;
        document.getElementById("previous-num").innerHTML = '.';
        sumCompleted = false;
    }

    id = buttonid.target.getAttribute('id')
    const idArray = id.split("_");
    id = idArray[1];
    oldNum = document.getElementById("display-num").innerHTML;


    if (oldNum.length < 21) {
        if (id === '.') {
            perdiodCheck = oldNum.includes(".");
            if (perdiodCheck === false) {
                newNum = oldNum.concat(id);
                document.getElementById("display-num").innerHTML = newNum;
            }
        } else {
            if (oldNum === '0') {
                document.getElementById("display-num").innerHTML = id;
            } else if (oldNum.includes(".")) {
                newNum = oldNum.concat(id);
                document.getElementById("display-num").innerHTML = newNum;
            } else {
            newNum = oldNum.concat(id);
            document.getElementById("display-num").innerHTML = newNum;
            }
        }
    }

    LengthCheck();
}

function ClearClicked() {
    clearType = document.getElementById("clear-display").innerHTML;
    if (clearType === 'C') {
        document.getElementById("display-num").innerHTML = '0';
        document.getElementById("clear-display").innerHTML = 'AC';
    } else {
        document.getElementById("display-num").innerHTML = '0';
        document.getElementById("previous-num").innerHTML = '.';
    }
    
    LengthCheck();
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
    
    LengthCheck();
}

function Percentage() {
    oldNum = document.getElementById("display-num").innerHTML;
    numLength = oldNum.length;
    if (numLength > 0) {
        newNum = oldNum/100;
        document.getElementById("display-num").innerHTML = newNum;
        sumCompleted = true;
    }
    
    LengthCheck();
}

function ChosenFunc(buttonid) {
    sumCompleted = false;

    functionClicked = buttonid.target.getAttribute('id');
    functionSymbol = document.getElementById(functionClicked).innerHTML;
    const FCArray = functionClicked.split("_");
    functionClicked = FCArray[1];

    previousNumber = document.getElementById("display-num").innerHTML;
    document.getElementById("previous-num").innerHTML = (previousNumber + ' ' + functionSymbol);
    document.getElementById("display-num").innerHTML = 0;

    LengthCheck();
}

function Sum() {
    currentNumber = document.getElementById("display-num").innerHTML;
    previousNumber = document.getElementById("previous-num").innerHTML;
    const SumArray = previousNumber.split(" ");

    sumCheck = previousNumber.includes("=");

    if (SumArray[1] === '÷') {
        if (sumCheck === true) {
            oldNum = (currentNumber+' '+SumArray[1]+' '+SumArray[2]+' = ');
            document.getElementById("previous-num").innerHTML = oldNum;
            newNum = Number(currentNumber) / Number(SumArray[2]);
            document.getElementById("display-num").innerHTML = newNum;
        } else {
            newNum = Number(SumArray[0]) / Number(currentNumber);
            document.getElementById("display-num").innerHTML = newNum;
            oldNum = previousNumber.concat(' ',currentNumber, ' = ');
            document.getElementById("previous-num").innerHTML = oldNum;
        }
    } else if (SumArray[1] === 'x') {
        if (sumCheck === true) {
            oldNum = (currentNumber+' '+SumArray[1]+' '+SumArray[2]+' = ');
            document.getElementById("previous-num").innerHTML = oldNum;
            newNum = Number(currentNumber) * Number(SumArray[2]);
            document.getElementById("display-num").innerHTML = newNum;
        } else {
            newNum = Number(SumArray[0]) * Number(currentNumber);
            document.getElementById("display-num").innerHTML = newNum;
            oldNum = previousNumber.concat(' ',currentNumber, ' = ');
            document.getElementById("previous-num").innerHTML = oldNum;
        }
    } else if (SumArray[1] === '-') {
        if (sumCheck === true) {
            oldNum = (currentNumber+' '+SumArray[1]+' '+SumArray[2]+' = ');
            document.getElementById("previous-num").innerHTML = oldNum;
            newNum = Number(currentNumber) - Number(SumArray[2]);
            document.getElementById("display-num").innerHTML = newNum;
        } else {
            newNum = Number(SumArray[0]) - Number(currentNumber);
            document.getElementById("display-num").innerHTML = newNum;
            oldNum = previousNumber.concat(' ',currentNumber, ' = ');
            document.getElementById("previous-num").innerHTML = oldNum;
        }
    } else if (SumArray[1] === '+') {
        if (sumCheck === true) {
            oldNum = (currentNumber+' '+SumArray[1]+' '+SumArray[2]+' = ');
            document.getElementById("previous-num").innerHTML = oldNum;
            newNum = Number(currentNumber) + Number(SumArray[2]);
            document.getElementById("display-num").innerHTML = newNum;
        } else {
            newNum = Number(SumArray[0]) + Number(currentNumber);
            document.getElementById("display-num").innerHTML = newNum;
            oldNum = previousNumber.concat(' ',currentNumber, ' = ');
            document.getElementById("previous-num").innerHTML = oldNum;
        }
    }
    LengthCheck();
    sumCompleted = true;
}


function LengthCheck() {
    displayNum = document.getElementById("display-num").innerHTML;
    if (displayNum.length < 13) {
        document.getElementById("display-num").style.fontSize = "3.5em";
    } else if (displayNum.length < 16 && displayNum.length >= 13) {
        document.getElementById("display-num").style.fontSize = "3em";
    } else if (displayNum.length < 18 && displayNum.length >= 15) {
        document.getElementById("display-num").style.fontSize = "2.5em";
    } else if (displayNum.length > 18) {
        document.getElementById("display-num").style.fontSize = "2em";
    }
}