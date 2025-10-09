let valueA
let valueB
let operatorInput

let isSecondValue = false

const numDisplay = document.getElementsByClassName("display")
const numbers = document.getElementById("num-container").querySelectorAll("button")
const operands = document.getElementById("op-container").querySelectorAll("button")


numbers.forEach(button => {
    button.addEventListener("click", (ev) => {
        let tar = ev.target
        let content = tar.textContent.trim()

        switch(content){
            case '0':
                (isSecondValue) ? valueB = 0:valueA = 0
                break;
            case '1':
                (isSecondValue) ? valueB = 1:valueA = 1               
                break;
            case '2':
                (isSecondValue) ? valueB = 2:valueA = 2 
                break;
            case '3':    
                (isSecondValue) ? valueB = 3:valueA = 3              
                break;
            case '4':  
                (isSecondValue) ? valueB = 4:valueA = 4                
                break;
            case '5':
                (isSecondValue) ? valueB = 5:valueA = 5                  
                break;
            case '6':
                (isSecondValue) ? valueB = 6:valueA = 6                  
                break;
            case '7':
                (isSecondValue) ? valueB = 7:valueA = 7               
                break;
            case '8':
                (isSecondValue) ? valueB = 8:valueA = 8                  
                break;
            case '9':
                (isSecondValue) ? valueB = 9:valueA = 9                  
                break;
            case 'AC': 
                console.log('Clear!')               
                break;
        }
    })
})

operands.forEach(button => {
    button.addEventListener("click", (ev) =>{
        let tar = ev.target
        let content = tar.textContent.trim()

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
    if(operator === '+'){
        console.log(sum(valA,valB))
    }else if (operator === '-'){
        console.log(subtract(valA,valB))
    }else if (operator === '*'){
        console.log(multiply(valA,valB))
    }else if (operator === '/'){
        console.log(divide(valA,valB))
    }
}