let valueA = 0
let valueB = 0
let tempVal = []
let operatorInput

let isSecondValue = false

const numDisplay = document.getElementById("display")
const numbers = document.getElementById("num-container").querySelectorAll("button")
const operands = document.getElementById("op-container").querySelectorAll("button")


numbers.forEach(button => {
    button.addEventListener("click", (ev) => {
        let tar = ev.target
        let content = tar.textContent.trim()
        
        switch(content){
            case '0': 
                tempVal.push(0)
                break;
            case '1':
                tempVal.push(1)    
                break;
            case '2':
                tempVal.push(2)
                break;
            case '3':    
                tempVal.push(3)           
                break;
            case '4':  
                tempVal.push(4)
                break;
            case '5':
                tempVal.push(5)
                break;
            case '6':
                tempVal.push(6)
                break;
            case '7':
                tempVal.push(7)
                break;
            case '8':
                tempVal.push(8)
                break;
            case '9':
                tempVal.push(9)
                break;
            case 'AC': 
                clear()     
                break;
        }

        if(isSecondValue){
            valueB = +tempVal.join('')
            document.getElementById("numTwo").textContent = `${valueB}`
        }else {
            valueA = +tempVal.join('')
            document.getElementById("numOne").textContent = `${valueA}`
        }
    })
})

operands.forEach(button => {
    button.addEventListener("click", (ev) =>{
        let tar = ev.target
        let content = tar.textContent.trim()
        tempVal = []
        switch(content){
            case '+':
                isSecondValue = true
                operatorInput = "+"
                break;
            case '-':
                isSecondValue = true
                operatorInput = "-"
                break;
            case '/':
                isSecondValue = true
                operatorInput = "/"
                break;
            case '*':
                isSecondValue = true
                operatorInput = "*"
                break;
            case '=':
                isSecondValue = false
                operate(valueA,valueB,operatorInput)
                break;
        }
        if(isSecondValue) document.getElementById("operand").textContent = operatorInput
    })
})

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
    let result
    if(operator === '+'){
        result = sum(valA,valB)
    }else if (operator === '-'){
        result = subtract(valA,valB)
    }else if (operator === '*'){
        result = multiply(valA,valB)
    }else if (operator === '/'){
        result = divide(valA,valB)
    }
    document.getElementById("result").textContent = result
}

const clear = () => {
    valueA = 0
    valueB = 0 
    tempVal = []
    operatorInput = ""     
    isSecondValue = false  
    document.getElementById("operand").textContent = operatorInput
    document.getElementById("numTwo").textContent = `${valueB}`
    document.getElementById("numOne").textContent = `${valueA}`
    document.getElementById("result").textContent = ''
}