function setup() {
  createCanvas(1000, 600);
}

function draw() {
  if(mouseIsPressed){
    fill(200);
  } else {
    fill(255);
  }

  ellipse(mouseX, mouseY, 80, 80);
}
