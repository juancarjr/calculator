inputs = []

var operators = {
    '+': function(a, b) { return a + b },
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b },
};

function separator(e) {
    switch (e.target.classList[0]) { 
        case 'num':
            if (inputs[0] == '=') {
                inputs.pop()
                display.textContent = ''
            }
            num = display.textContent + e.target.textContent
            display.textContent = num
            break
        case 'operator':
            operation = e.target.textContent
            display.textContent = operation
            checker(+num)
            checker(operation)
            break
}}

function checker(term) { // needs two arguments
    console.log('Term:', term, 'Term is numeric?', Number.isInteger(term))
    if (Number.isInteger(term) && inputs.length == 0) { // first term, has to be numeric
        inputs.push(term)
    } else if (Number.isInteger(term) && !(Number.isInteger(inputs[inputs.length - 1]))) { // last term operator, current numeric
        inputs.push(term)
    } else if (!(Number.isInteger(term)) && Number.isInteger(inputs[inputs.length - 1])) { // last term numeric, current operator
        console.log(inputs)

        if (term == '=' && inputs.length == 3) {
            try {display.textContent = operators[inputs[1]](inputs[0], inputs[2])
            inputs = []
        } catch {
            console.log('ERROR', inputs)
        };
        }
        inputs.push(term)
    }
}

function operate(e) {
    if (inputs.length < 3) {
        separator(e)
        console.log(inputs)
    } else {
        inputs = []
    }
}



display = document.querySelector('#display')
keys = document.querySelectorAll('li')
keys.forEach(key => {key.addEventListener('click', operate)});
