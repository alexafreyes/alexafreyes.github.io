let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmnkL6LiTNygX2lTjdYHSmA2a6dt5qi1kBDrGOg948TrVRS7UwK5hlpM6BhMEiepEZtoQP2i_1C99k/pub?output=csv"

function preload() {
  data = loadTable(url, 'csv', 'header');
  // data = loadTable('oneData - Sheet1.csv', 'csv', 'header');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(0);
  
  //this makes sure there is content in the data
  if (data) {

    //get the amount of rows in the CSV
    let numRows = data.getRowCount();

    //get the column titled Miles
    let name = data.getColumn("Student");
    let member = data.getColumn("Member");
    
    //debug
    print(name);
    print(member);
    
    //iterate over the number of rows
    for (let i = 0; i < numRows; i++) {
      
      let x = random(width-10);
      let y = random (height)-10;
      
       if(member[i] == "Harry"){
        fill("pink");
         textSize(69);
      }else if(member[i] == "Niall"){
        fill("green");
        textSize(40)
      }else{
       fill("purple"); 
        textSize(10);
      }
      text(name[i],x,y);
      
//       let x = 100;
//       let y = 100 + (i*20); //i*20 will increment by 20 each time the loop runs
//       let w = member[i]*50;  //miles by itself was small, so * to get a bigger #
//       let h = 10;
      
//       rect(x,y,w,h);
    }
  }
}
