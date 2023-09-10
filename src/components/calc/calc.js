import './calc.css';

import ProjectsNav from'../ProjectsNav.js';

const Calc = () => {

    return (
    <div>
        <ProjectsNav />
        <section id='calc'>
            <div className='calc-wrapper'>
                <div className='calc-screen'>
                    <div className='previous-entry'><p id='previous-num'>:)</p></div>
                    <div className='current-number'><p id='display-num'>0</p></div>
                </div>
                <div className='calc-buttons'>
                    <button onClick={ClearClicked}  id='clear-display' className='calc-button calc-function-top'>AC</button>
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
        document.getElementById("previous-num").style.color = "#242424";
        sumCompleted = false;
    }

    id = buttonid.target.getAttribute('id')
    const idArray = id.split("_");
    id = idArray[1];
    oldNum = document.getElementById("display-num").innerHTML;


    if (oldNum.length < 23) {
        if (id === '.') {
            perdiodCheck = oldNum.includes(".");
            if (perdiodCheck === false) {
                newNum = oldNum.concat(id);
                document.getElementById("display-num").innerHTML = newNum;
            }
        } else {
            if (oldNum === '0') {
                document.getElementById("display-num").innerHTML = id;
            } else {
                newNum = oldNum.concat(id);
                perdiodCheck = oldNum.includes(".");
                if (perdiodCheck === false && newNum.length >= 4) {
                    UnitSetting();
                }
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
        document.getElementById("previous-num").style.color = "#242424";
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
    previousNumber = document.getElementById("previous-num").innerHTML;

    if(previousNumber !== ".") {
        Sum();
        sumCompleted = false;
    }

    functionClicked = buttonid.target.getAttribute('id');
    functionSymbol = document.getElementById(functionClicked).innerHTML;
    const FCArray = functionClicked.split("_");
    functionClicked = FCArray[1];

    previousNumber = document.getElementById("display-num").innerHTML
    previousNumber = previousNumber.replaceAll(',','');
    document.getElementById("previous-num").innerHTML = (previousNumber + ' ' + functionSymbol);
    document.getElementById("previous-num").style.color = "#adadad";
    document.getElementById("display-num").innerHTML = 0;
    LengthCheck();
}



function Sum() {
    currentNumber = document.getElementById("display-num").innerHTML;
    currentNumber = currentNumber.replaceAll(',','');;
    previousNumber = document.getElementById("previous-num").innerHTML;
    const SumArray = previousNumber.split(" ");

    sumCheck = previousNumber.includes("=");

    if (SumArray[1] === '÷') {
        if (sumCheck === true) {
            newNum = Number(currentNumber) / Number(SumArray[2]);
            NumChange();
        } else {
            newNum = Number(SumArray[0]) / Number(currentNumber);
            NumChange();
        }
    } else if (SumArray[1] === 'x') {
        if (sumCheck === true) {
            newNum = Number(currentNumber) * Number(SumArray[2]);
            NumChange();
        } else {
            newNum = Number(SumArray[0]) * Number(currentNumber);
            NumChange();
        }
    } else if (SumArray[1] === '-') {
        if (sumCheck === true) {
            newNum = Number(currentNumber) - Number(SumArray[2]);
            NumChange();
        } else {
            newNum = Number(SumArray[0]) - Number(currentNumber);
            NumChange();
        }
    } else if (SumArray[1] === '+') {
        if (sumCheck === true) {
            newNum = Number(currentNumber) + Number(SumArray[2]);
            NumChange();
        } else {
            newNum = Number(SumArray[0]) + Number(currentNumber);
            NumChange();
        }
    }
    LengthCheck();
    sumCompleted = true;
}

function NumChange() {
    previousNumber = document.getElementById("previous-num").innerHTML;
    const SumArray = previousNumber.split(" ");
    UnitSetting();
    document.getElementById("display-num").innerHTML = newNum;

    if (sumCheck === true) {
        oldNum = (currentNumber+' '+SumArray[1]+' '+SumArray[2]+' = ');
    } else {
        oldNum = previousNumber.concat(' ',currentNumber, ' = ');
    }

    document.getElementById("previous-num").innerHTML = oldNum;
}


function LengthCheck() {
    displayNum = document.getElementById("display-num").innerHTML;
    if (displayNum.length < 13) {
        document.getElementById("display-num").style.fontSize = "3.5em";
    } else if (displayNum.length < 15 && displayNum.length >= 13) {
        document.getElementById("display-num").style.fontSize = "3em";
    } else if (displayNum.length < 18 && displayNum.length >= 14) {
        document.getElementById("display-num").style.fontSize = "2.5em";
    } else if (displayNum.length >= 18) {
        document.getElementById("display-num").style.fontSize = "2em";
    }
}

function UnitSetting() {
    var tempNum = newNum+'';
    var activePerdiodCheck = tempNum.includes('.');

    const UnitArray = tempNum.split('.');
    newNum = UnitArray[0];

    if (newNum.includes(',') === true) {
        newNum = newNum.replaceAll(',','');
    }
    var diff = newNum.length-3;


    if (newNum.length > 3 && newNum.length < 7 ) {
        newNum = newNum.substr(0, diff) + ',' + newNum.substr(diff, 3);
    } else if (newNum.length >= 7 && newNum.length < 10) {
        diff = newNum.length-6;
        newNum = newNum.substr(0, diff) + ',' + newNum.substr(diff, 3) + ',' + newNum.substr(diff+3,3);
    } else if (newNum.length >= 10 && newNum.length < 13) {
        diff = newNum.length-9;
        newNum = newNum.substr(0, diff) + ',' + newNum.substr(diff, 3) + ',' + newNum.substr(diff+3,3) + ',' + newNum.substr(diff+6,3);
    } else if (newNum.length >= 13 && newNum.length < 16) {
        diff = newNum.length-12;
        newNum = newNum.substr(0, diff) + ',' + newNum.substr(diff, 3) + ',' + newNum.substr(diff+3,3) + ',' + newNum.substr(diff+6,3) + ',' + newNum.substr(diff+9,3);
    } else if (newNum.length >= 16 && newNum.length < 19) {
        diff = newNum.length-15;
        newNum = newNum.substr(0, diff) + ',' + newNum.substr(diff, 3) + ',' + newNum.substr(diff+3,3) + ',' + newNum.substr(diff+6,3) + ',' + newNum.substr(diff+9,3) + ',' + newNum.substr(diff+12,3);
    }

    if (activePerdiodCheck === true) {
        if (UnitArray[1] !== null) {
            newNum = newNum.concat('.',UnitArray[1]);
        } 
    }
}