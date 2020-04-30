let data;
let title;
let f;
let u;
let menu0;
let menu;
let menu1;
let menu2;
let menu3;
let menu4;
let menu5;
let menu6;
let menu7;
let menu8;
let menu9;
let menu10;

let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTBs2ZmZYF_v7_HdBlMxKmRcHHnvxek3Lpd7OJGSuAXA4ow4H5R80vXFg1HIswbtVsQr-eiGR2qL7rc/pub?output=csv"

function preload() {
  data = loadTable("Consoles.csv", 'csv', 'header');
  f = loadFont('Pretendo.ttf')
}

function setup() {
  createCanvas(windowWidth, 1000);
  background(0);
  noLoop();
  // print(data);

  title = createP("Best Selling Game Consoles That Surpassed One Million Sales");
  title.position(75, 25);
  title.addClass("title");
  
    menu0 = createP("15.5mil");
  menu0.position(20,185);
  menu0.addClass("menu0");
  
  menu = createP("Nintendo");
  menu.position(width-250,200);
  menu.addClass("menu");
  
  menu1 = createP("Sony");
  menu1.position(width-250,220);
  menu1.addClass("menu1");
  
  menu2 = createP("Microsoft");
  menu2.position(width-250,240);
  menu2.addClass("menu2");
  
  menu3 = createP("Sega");
  menu3.position(width-250,260);
  menu3.addClass("menu3");
  
  menu4 = createP("Atari");
  menu4.position(width-250,280);
  menu4.addClass("menu4");
  
//   menu5 = createP("NEC/Hudson Soft");
//   menu5.position(width-250,240);
//   menu5.addClass("menu5");
  
    menu6 = createP("Bandai");
  menu6.position(width-250,300);
  menu6.addClass("menu6");
  
    menu7 = createP("Mattel");
  menu7.position(width-250,320);
  menu7.addClass("menu7");
  
    menu8 = createP("Other");
  menu8.position(width-250,340);
  menu8.addClass("menu8");
  
   menu9 = createP("Released before 1999");
  menu9.position(width-250,400);
  menu9.addClass("menu9");
  
   menu10 = createP("Released after 1999");
  menu10.position(width-250,420);
  menu10.addClass("menu10");
  
}

function draw() {

  if (data) {

    let numRows = data.getRowCount();

    let name = data.getColumn("System");
    let sales = data.getColumn("Sales");
    let firm = data.getColumn("Firm");
    let rel = data.getColumn("Release");
    //    print(name);
    // print(sales);
    print(rel);

    //iterate over the number of rows
    for (let i = 0; i < numRows; i++) {

      let y = height - 300;
 let x = 75 + (i * 27);
      let w = 15;

      let h = map(sales[i], 0, 155000000, 0, height / 2);

      if (firm[i] == "Nintendo") {
        fill("#E70009");
        rect(x, y, w, -h);
      } else if (firm[i] == "Sony") {
        fill("#0112FE");
        rect(x, y, w, -h);
      } else if (firm[i] == "Microsoft") {
        fill("#FFB900");
        rect(x, y, w, -h);
      } else if (firm[i] == "Sega") {
        fill("#8E45FF");
        rect(x, y, w, -h);
      } else if (firm[i] == "Atari") {
        fill("#1EFF0F");
        rect(x, y, w, -h);
      // } else if (firm[i] == "NEC/Hudson Soft") {
      //   fill("#4DC5FF");
      //   rect(x, y, w, -h);
      } else if (firm[i] == "Bandai") {
        fill("#ed6d00");
        rect(x, y, w, -h);
      } else if (firm[i] == "Mattel") {
        fill("#e0218a");
        rect(x, y, w, -h);
      } else {
        fill(150);
        rect(x, y, w, -h);
      }

      if (rel[i] < 1999) {
        fill("#FFFF00");
      } else {
        fill(255);
      };
      push();
      translate((x + 3), (y + 7))
      angleMode(DEGREES);
      rotate(90);
      textFont(f, 11);
      text(name[i], 0, 0);

      pop();

    }



  }
}