status = "";
video = "";
word = "";

function setup(){
    canvas = createCanvas(600, 430);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 400);
    video.hide();
}
function preload(){
    
}
 
function draw(){
    image(video, 0, 0, 600, 430);
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting " + document.getElementById("input").value;
    word = document.getElementById("input").value;
    console.log(word);
}

function modelLoaded(){
    console.log("Done!")
    status = true ; 
}
/*




*/