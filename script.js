let valueA = 0
let valueB = 0
let tempVal = []

let operatorContainer = []
let operatorInput

let isSecondValue = false
let isEqual = false

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
        limitArraySize(operatorContainer)

        switch(content){
            case '+':
                isSecondValue = true
                operatorContainer.push("+")
                operatorInput = "+"
                break;
            case '-':
                isSecondValue = true
                operatorContainer.push("-")
                operatorInput = "-"
                break;
            case '/':
                isSecondValue = true
                operatorContainer.push("/")
                operatorInput = "/"
                break;
            case '*':
                isSecondValue = true
                operatorContainer.push("*")
                operatorInput = "*"
                break;
            case '=':
                isSecondValue = false
                isEqual = true
                operate(valueA,valueB,operatorInput)
                break;
        }

        console.log(checkSecondVal())

        if(isSecondValue){
            document.getElementById("operand").textContent = operatorInput
            if(checkSecondVal() === false){
                operate(valueA,valueB,operatorContainer[0])
                document.getElementById("numTwo").textContent = ''
            } 
        } 
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

    if(!isEqual){
        valueA = result
        document.getElementById("numOne").textContent = result
    }

    if(isEqual){
        isEqual = false
        document.getElementById("result").textContent = result
    }    
    
}

const clear = () => {
    valueA = 0
    valueB = 0
    tempVal = []
    operatorInput = ""     
    isSecondValue = false  
    document.getElementById("operand").textContent = operatorInput
    document.getElementById("numTwo").textContent = ''
    document.getElementById("numOne").textContent = ''
    document.getElementById("result").textContent = ''
}

const checkSecondVal = () => {
    if(document.getElementById("numTwo").textContent === '') return true
    else return false
}

const limitArraySize = (arr = []) => {
    if(arr.length >= 2){
        return arr.shift()
    }
}