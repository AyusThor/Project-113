function preload() {

}

function setup() {
    canvas=createCanvas(500, 500);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 500);
    fill("yellow");
    stroke("blue");
    circle(100, 150, 75);
    fill("yellow");
    stroke("blue");
    triangle(100, 150, 50, 300, 400, 300);
}

function take_snapshot() {
    save("myimage.png");
}