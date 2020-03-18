let sec;
let mint;
let hr;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#E1FDF9");

  //remap seconds/minutes/hours to fit within my canvas
  // sec = map(second(), 0, 60, 0, width);
  // mint = map(minute(), 0, 60, 0, width);
  // hr = map(hour(), 0, 24, 0, width);

  //draw sec/min/hour
    noStroke();
  
   fill("#FFE682");
   push();
  translate(width/2, height/2);
  rotate(hour());
  star(0, 0, 25, 300, 6);
  pop();

  push();
    fill("#FFCE52");

  translate(width/2, height/2);
  rotate(minute());
  star(0, 0, 70, 150, 5);
  pop();

  push();
  fill("#FFB805");
  translate(width/2, height/2);
  rotate(second());
  star(0, 0, 50, 70, 60);
  pop();
}
  
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

}
