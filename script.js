let firstNum = ''
let secondNum = ''
let firstOperator = ''
let secondOperator = ''
let trigger = false

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

function getOperator(e) {
    if (firstOperator) {
        secondOperator = e.target.innerText
        secondNum = display.textContent
        operate()
    } else firstNum = display.textContent
    currentOperator = e.target.innerText
    resultString(currentOperator)
    firstOperator = currentOperator
    clearDisplay()

}

function resultString(input) {
    if (trigger) {
        clearResultDisplay()
        resultDisplay.textContent = input
        trigger = false
    } else {
    resultDisplay.textContent += input
    }
}

function clearDisplay() {
    display.textContent = ''
}

function clearResultDisplay() {
    resultDisplay.textContent = ''
}

function operate() {
    console.log(firstNum, firstOperator, secondNum, secondOperator)
    results = op[firstOperator](+firstNum, +secondNum)
    console.log(results)
    firstNum = results
    display.textContent = results
    trigger = true
    resultString(results)
}

function reset() {
    firstNum = ''
    firstOperator = ''
    secondOperator = ''
}

const operators = document.querySelectorAll('.operator')
const keys = document.querySelectorAll('.num')
const display = document.querySelector('#display')
const resultDisplay = document.querySelector('#header')
keys.forEach(key => {key.addEventListener('click', displayKey)});
operators.forEach(key => {key.addEventListener('click', getOperator)});
