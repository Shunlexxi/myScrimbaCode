let num1  = 8
let num2 = 2
let sumEL = document.getElementById("sum-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function add() {
    //version 1 ===> sum.textContent += (num1 + num2 + ", ")
    let result = num1 + num2
    sumEL.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEL.textContent = "Subtraction: " + result
}

function divide() {
    let result = num1 / num2
    sumEL.textContent = "Quotient: " + result
}

function multiply() {
    let result = num1 * num2
    sumEL.textContent = "Product: " + result
}