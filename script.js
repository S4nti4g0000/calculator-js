let valueA
let valueB
let operatorInput

const sum = (...args) => {
    return args.reduce((acc, value) => acc + value, 0)
}

const subtract = (...args) => {
    return args.reduce((acc, value) => acc - value)
}

const multiply = (...args) => {
    return args.reduce((acc, value) => acc * value)
}

const divide = (...args) => {
    return args.reduce((acc, value) => acc / value)
}

function operate(valA, valB, operator){
    if(operator === '+'){
        sum(valA,valB)
    }else if (operator === '-'){
        subtract(valA,valB)
    }else if (operator === '*'){
        multiply(valA,valB)
    }else if (operator === '/'){
        divide(valA,valB)
    }
}