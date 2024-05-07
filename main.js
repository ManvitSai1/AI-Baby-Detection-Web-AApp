
status = "";
objects = [];
function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function preload(){
    song = loadSound("alarm-clock-short-6402.mp3");

}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status : Detecting Objects"
}
function draw(){
    image(video, 0, 0, 380, 380);
    if(status != "")
        {
            objectDetector.detect(video, gotResult);
            r = random(255);
            g = random(255);
            b = random(255);
        if(objectDetector="human"){
            document.getElementById("status").innerHTML= "Status : Person Detected";
                    fill(r,g,b);
                    percent = floor(objects[i].confidence*100);
                    text(objects[i].label + " " +percent + "%",objects[i].x+15, objects[i].y+15);
                    noFill();
                    stroke(r,g,b);
                    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        else{
            song.play();

        }
               
        
        }

}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}
function gotResult(error, results)
{
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results; 
}