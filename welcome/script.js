
const welcomeEl = document.getElementById("welcome-el")


//reusable functions; passing parameters
function greetUser(greeting, name, emoji) {

    welcomeEl.innerText = `${greeting}, ${name}! ${emoji}`
}


greetUser("Howdy","Taiwo", "❤️")





//passing Numbers

function add(x, y) {
    console.log(x + y)
}

add(3, 4)
add(9, 102)

//greeting and name are parameters
//Howdy and Taiwo...are arguements
//x and y are parameters
//3 and 4 are arguements


//passing arrays

function getFirst(arr) {

    console.log(arr[0]) 

}

const list = [50, 20, 30]

getFirst(list)