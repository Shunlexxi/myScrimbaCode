// function countDown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

//setting up the race
//countDown()

// GO!

//players are sunning the race

// Race finished

// Get ready for new race
//countDown()


//END OF RACE GAME===============================

let player1Time = 102
let player2Time = 107 

// function fastestRaceTime() {
//     if (player1Time > player2Time){
//         return player1Time
//     }

//     else if (player2Time > player1Time){
//         return player2Time
//     }
    
//     else {
//         return player1Time
//     }
// }

//END OF FASTEST RACE TIME FUNCTION

function totalRaceTime() {
    return player1Time + player2Time
}

let raceTime = totalRaceTime()

console.log(raceTime) 
