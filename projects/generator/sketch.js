//variable to store the object
let ball;
let colorPicker;
let col;
let numOfBalls = 1;
let balls = [];
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //create a new object using the class 
  angleMode(DEGREES);
  colorPicker = createColorPicker('#ed225d');
  col = colorPicker.color();
  colorPicker.position(0, 0);
    slider = createSlider(5, 300, 50, 10);
  slider.position(width-165, 10);
  slider.style('width', '150px');

  for (let i = 0; i < numOfBalls; i++) {
    balls[i] = new Ball(random(width), 0, col);
  }

}

function draw() {
  background(255, 30); //add opacity/trail


  //call the functions of the object
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].display();
    balls[i].intersect(mouseX, mouseY);

  }
}

//function to add new ball!

function mousePressed() {
  balls.push(new Ball(mouseX, -40,colorPicker.color()));
}


class Ball {
  constructor(x, y,c) {
      let val = slider.value();
    this.x = x;
    this.y = y;
    this.xDirection = 1;
    this.yDirection = 1;
    this.d = val;
   this.col =c;

  }
  //how its displayed on the canvas
  display() {

   
    strokeWeight(0);
    fill(this.col);
    rectMode(CENTER);
    // beginShape();
    // square(this.x, (this.y-(this.d/2)), (this.d/2),);
    triangle((this.x-(this.d/2)),this.y,this.x,(this.y-(this.d+5)),(this.x+(this.d/2)),this.y)
    arc(this.x, this.y, this.d,this.d,0,180,);
    
    // endShape(CLOSE);
    
  }

  //movement
  move() {
    this.y = (this.y + this.yDirection);
    
  }

  intersect(x, y) {
    let d = dist(this.x, this.y, x, y);
    let r = dist(this.x - this.d / 2, this.y, x, y);
    let l = dist(this.x + this.d / 2, this.y, x, y);

    if (l > this.d / 2 && d < this.d / 2) {
      print("left");
      this.x++;
    } else if (r > this.d / 2 && d < this.d / 2) {
      print("right");
      this.x--;
    }


  }



}