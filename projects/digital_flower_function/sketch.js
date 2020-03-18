function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15); //slow down
  angleMode(DEGREES);
}

function draw() {
  background("#33612C");

  for (let i = 0; i < 60; i++) {
    flower(random(width), random(height),rotate(random(1,45)));
  }

}

function flower(x, y,rote) {

 // leaves
fill("#213D00");
  push();
  translate(x,y);
  rotate(65);
  ellipse(0, 0, 30, 110);
  ellipse(0, 0, 110, 30);
  
  pop();

  //redone
  fill("#FF3239");
  noStroke();
  ellipse(x - 20, y + 20, 20);
  ellipse(x + 20, y - 20, 20);
  ellipse(x - 20, y - 20, 20);
  ellipse(x + 20, y + 20, 20);

  //redtwo
  fill("#800812");
  noStroke();
  ellipse(x, y + 20, 30);
  ellipse(x + 20, y, 30);
  ellipse(x, y - 20, 30);
  ellipse(x - 20, y, 30);



  //pink
  fill("#FF6880");
  noStroke();
  ellipse(x, y, 30, 30);

  //yellur
  fill(255, 255, 10);
  noStroke();
  ellipse(x, y, 20, 20);
}