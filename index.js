// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4"; 

//EventListener
document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){ moveDodgerLeft()}
    if (e.key === "ArrowRight"){moveDodgerRight()}
})

//Move left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0){
        dodger.style.left = `${left - 1}px`
    }
}

//Move Right
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px","");
    const right = parseInt(rightNumbers, 10)

    if (right < 360){
        dodger.style.left = `${right + 1}px`
    }
}