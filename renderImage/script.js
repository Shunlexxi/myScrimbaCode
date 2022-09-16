// Inserting images with JS; keep the HTML clean, add images 
// to database (JS), create a function that renders the images
// on the screen

const imgs = [
    "images/hip1.PNG",
    "images/hip2.PNG",
    "images/hip3.PNG"
]

const imgContainer = document.getElementById("img-container")

//function that renders images
function renderImages() {
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++)
    {
        imgsDOM += `<img alt="Employees Picture" class="team-img" src="${imgs[i]}">` 
    }
    imgContainer.innerHTML = imgsDOM
}

renderImages()

//