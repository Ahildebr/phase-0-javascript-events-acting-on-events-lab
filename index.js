// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4"; 

//EventListener
document.addEventListener("keydown", function(e){
    console.log(e)
    if (e.key === "ArrowLeft"){ moveDodgerLeft()}
    if (e.key === "ArrowRight"){moveDodgerRight()}
    if (e.key === "ArrowUp"){moveDodgerUp()}
    if (e.key === "ArrowDown"){moveDodgerDown()}
})

//Move left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0){
        dodger.style.left = `${left - 5}px`
    }
}

//Move Right
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px","");
    const right = parseInt(rightNumbers, 10)

    if (right < 360){
        dodger.style.left = `${right + 5}px`
    }
}

//Move Up 
function moveDodgerUp() {
    const heightUp = dodger.style.bottom.replace("px","");
    const up = parseInt(heightUp, 10)

    if (heightUp < 380){
        dodger.style.bottom = `${up + 5}px`
    }
}

//Move Down
function moveDodgerDown() {
    const heightUp = dodger.style.bottom.replace("px","");
    const up = parseInt(heightUp, 10)

    if (heightUp > 0){
        dodger.style.bottom = `${up - 5}px`
    }
}


