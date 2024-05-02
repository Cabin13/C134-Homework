img= ""
var modelStatus= ""
var objects= []

function preload() {
}

function setup() {
    canvas= createCanvas(400, 250);
    canvas.center();
    video= createCapture(VIDEO)
    video.size(400, 250)
    video.hide()
    objectDetector= ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML= "Status: Object Detecting"
}

function draw() {
    image(video, 0, 0, 400, 250)

    if (modelStatus==true) {
        objectDetector.detect(video, gotResult)

        if (objects[1]==person) {
            document.getElementById("babyFound").innerHTML= "Baby Found: Yes"
        }

        else {
            document.getElementById("babyFound").innerHTML= "Baby Found: No"
        }

        if (objects.length<0) {
            document.getElementById("babyFound").innerHTML= "Baby not detected"
        }

       // for (i=0; i<objects.length; i++) {
       // document.getElementById("status").innerHTML= "Status: Object Detected"
       // accuracy= floor(objects[i].confidence*100) + "%"
        //fill(randomR, randomG, randomB)
        //text(objects[i].label + " -> " + accuracy, objects[i].x, objects[i].y)
       // noFill()
        //stroke(randomR, randomG, randomB)
        //rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        //document.getElementById("babyFound").innerHTML= "Baby Found: " + objects.length
    }
}

function modelLoaded() {
    console.log("model loaded")
    modelStatus= true
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    }

    else {
        console.log(results)
        objects= results
    }
}