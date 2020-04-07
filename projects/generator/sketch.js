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
  background(255, 50); //add opacity/trail


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
    
    // this.xAcc = random(0.51, 0.5);
    // this.xAngle = random(0, 60);
    // this.yAcc = random(0.01, 0.5);
    // this.yAngle = random(0, 60);
  }
  //how its displayed on the canvas
  display() {
    // fill(colorPicker.color());
    //noStroke();
    strokeWeight(0);
    fill(this.col);
    ellipse(this.x, this.y, this.d);
  }

  //movement
  move() {
    this.y = (this.y + this.yDirection);
    // this.x = this.x + (this.xDirection*this.xAcc*cos(this.xAngle));
    // this.y = this.y + (this.yDirection*this.yAcc*sin(this.yAngle));
    // if (this.y > height)
    //   //reset value of x position
    //   this.y = -40;
    // this.x = random(width)
  }

  intersect(x, y) {
    let d = dist(this.x, this.y, x, y);
    let r = dist(this.x - this.d / 2, this.y, x, y);
    let l = dist(this.x + this.d / 2, this.y, x, y);
    // let t = dist(this.x, this.y + this.d / 2, x, y);
    // let b = dist(this.x, this.y - this.d / 2, x, y);

    if (l > this.d / 2 && d < this.d / 2) {
      print("left");
      this.x++;
    } else if (r > this.d / 2 && d < this.d / 2) {
      print("right");
      this.x--;
    }

    // if (b > this.d / 2 && d < this.d / 2) {
    //   print("bottom");
    //   this.y++;
    // } else if (t > this.d / 2 && d < this.d / 2) {
    //   print("top");
    //   this.y--;
    // }

  }



}