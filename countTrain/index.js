//global variables
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById("save-el")

let counter = 0


function increment() {  
    countEl.innerHTML = counter += 1
}

function save(){
    let CountStr = counter + " - " 
    saveEl.textContent += CountStr
    console.log(counter)
    countEl.textContent = 0
    counter = 0
    
}
