
function start() {
    isGameStarted = true;
    status.textContent = "Game Started";
}

function finish() {
    if(isGameStarted && !isGameOver){
        status.textContent = "You Win !!!";
        isGameOver = true;

        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}

function play() {
    if(isGameStarted && !isGameOver){
        status.textContent = "You Lost :(";
        isGameOver = true;

        setTimeout(() => {
            if (confirm("You lost! Would you like to try again?")) {
                reset(); 
            } else {
                status.textContent = "Game Over. Refresh the page to restart."; 
            }
        }, 1000);
    }
}

function reset(){
    status.textContent = "Begin by moving your mouse over the 'S'.";
    isGameOver = false;
    isGameStarted = false;
}

var startPosition = document.getElementById("start");
var endPosition = document.getElementById("end");
var boundaries = document.querySelectorAll(".boundary");
let status = document.getElementById("status");
var isGameStarted = false;
var isGameOver = false;

startPosition.addEventListener("mouseenter", start);
endPosition.addEventListener("mouseenter", finish);

boundaries.forEach(boundary => {
    boundary.addEventListener("mouseenter", play)
});


