let valueA
let valueB
let operatorInput

const numDisplay = document.getElementsByClassName("display")
const numbers = document.getElementById("num-container").querySelectorAll("button")


numbers.forEach(button => {
    button.addEventListener("click", (ev) => {
        let tar = ev.target
        let content = tar.textContent.trim()

        switch(content){
            case '0':
                console.log(0)
                break;
            case '1':
                console.log(1)                
                break;
            case '2':                
                break;
            case '3':                
                break;
            case '4':                
                break;
            case '5':                
                break;
            case '6':                
                break;
            case '7':
                console.log(7)               
                break;
            case '8':                
                break;
            case '9':                
                break;
            case 'AC': 
                console.log('Clear!')               
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
        sum(valA,valB)
    }else if (operator === '-'){
        subtract(valA,valB)
    }else if (operator === '*'){
        multiply(valA,valB)
    }else if (operator === '/'){
        divide(valA,valB)
    }
}