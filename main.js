noseX = 0;
noseY = 0;

function preload() {
    mustache= loadImage("https://i.postimg.cc/DfRpMtQx/mustache.png");
}

function setup() {
    canvas= createCanvas(500,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(500,400);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function draw() {
    image(video,0,0,500,400);
    image(mustache, noseX, noseY,90, 60);
}

function take_snapshot() {
    save("image.png");
}

function getPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 43;
        noseY = results[0].pose.nose.y - 10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}