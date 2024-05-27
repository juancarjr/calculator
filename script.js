let firstNum = ''
let secondNum = ''
let firstOperator = ''
let secondOperator = ''
let clean = true
const keys = document.querySelectorAll('.num')
const display = document.querySelector('#display')
const resultDisplay = document.querySelector('#header')
const operators = document.querySelectorAll('.operator')
keys.forEach(key => {key.addEventListener('click', displayKey)});
operators.forEach(key => {key.addEventListener('click', getOperator)});

var op = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b },
};


function displayKey(e) {
    display.textContent += e.target.innerText
    resultString(e.target.innerText)
}
function operatorHandler(e) {
    switch(e) {
        case 'C':

        break
        case 'CE':
            
    }


}
function getOperator(e) {
    if (e.target.innerText == 'C') {
        reset()
        return 'clear all'
    } else if (e.target.innerText == 'CE') {
        display.textContent = display.textContent.slice(0, -1)
    }
    if (firstOperator) {
        secondOperator = e.target.innerText // get second op from eventlistener
        secondNum = display.textContent // get second num from displayed number
        operate()
        firstOperator = e.target.innerText
        clearDisplay()
    } else firstNum = display.textContent
    resultString(e.target.innerText)
    firstOperator = e.target.innerText
    clearDisplay()

}

function operate() {
    console.log(firstNum, firstOperator, secondNum, secondOperator)
    if (firstOperator == '/' && secondNum == '0') { // division by zero
        resultString('ERROR', 'clear')
        return 
    } 
    results = op[firstOperator](+firstNum, +secondNum) // operation
    console.log(results, secondNum)
    if (secondOperator == '=') {
        reset()
    }
    firstNum = results // the result replaces the first operand
    displayString(results, 'clear')
    resultString(results, 'clear')
}

function resultString(input, trigger='') {
    if (trigger) {
        clearResultDisplay()
        resultDisplay.textContent = input
    } else {
        resultDisplay.textContent += input
    }
}

function displayString(input, trigger='') {
    if (trigger) {
        clearResultDisplay()
        display.textContent = input
    } else {
        display.textContent += input
    }
}

function clearDisplay() {
    display.textContent = ''
}

function clearResultDisplay() {
    resultDisplay.textContent = ''
}

function reset() {
    firstNum = ''
    secondNum = ''
    firstOperator = ''
    secondOperator = ''
    clearResultDisplay()
    clearDisplay()
}


