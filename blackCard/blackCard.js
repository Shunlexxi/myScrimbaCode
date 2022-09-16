//global variables
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let meassage = ''
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")

//let sumEl = document.getElementById("sum-el")


let player = {
    name: "Per",
    chips: 145
}

let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips 

function getRandomNumber() {
    
    let randomNumber = Math.floor(Math.random() * 13) + 1
    
    if (randomNumber === 1)
    {
        return 11
    }

    else if (randomNumber > 10)
    {
        return 10
    }
    else{
        return randomNumber
    }
    
}

function startGame() {
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame(){

    cardsEl.textContent = "Cards: " 
    
   for (let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
   }
    
    sumEl.textContent = "sum: " + sum
    
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    }
    else if (sum === 21){
        message = 'You have got BlackJack!'
        hasBlackJack = true
    }
    else {
        message = 'You are out of the game!'
        isAlive = false
    }
    
    messageEl.textContent = message
}




function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}































//predict result
// console.log(4 === 3) //false
// console.log(5 > 2) // true
// console.log(12 > 12) //false
// console.log(3 < 0) //false
// console.log(3 >= 3) //true
// console.log(11 <= 11) //true
// console.log(3 <= 2) //false
