function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 0, 0, width, height);
}

function take_snapshot(){    
  save('student_name.png');
}
