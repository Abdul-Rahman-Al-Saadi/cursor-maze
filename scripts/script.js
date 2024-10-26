console.log("script connected")

function start() {
    console.log("function start is working");
}

function finish() {
    console.log("function finish is working");
}

function play() {
    console.log("function play is working");
}

var startPosition = document.getElementById("start");
var endPosition = document.getElementById("end");
var boundaries = document.querySelectorAll(".boundary");

startPosition.addEventListener("mouseenter", start);
endPosition.addEventListener("mouseenter", finish);

boundaries.forEach(boundary => {
    boundary.addEventListener("mouseenter", play)
});


