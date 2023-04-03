song1="";
song2="";
leftWX=0;
leftWY=0;
rightWX=0;
rightWY=0;
function preload(){
    song1=loadSound("song1.mp3");
    song2=loadSound("song2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWX=results[0].pose.leftWrist.x;
        leftWY=results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWX+" leftWristY = "+leftWY);
        rightWX=results[0].pose.rightWrist.x;
        rightWY=results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWX+" rightWristY = "+rightWY);
    }
}