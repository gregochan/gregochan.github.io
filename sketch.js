var w = window.innerWidth;
var h = window.innerHeight; 
//let img;

function preload() {
  //img = loadImage('coco_bg.png');
  
}

function setup() {
  createCanvas(700,700);
  Myfont = loadFont('SmileySans-Oblique.otf');
  smooth();
}



function draw() {

  frameRate(60);
  textSize(20);
  noStroke();
  fill(0);
  textFont(Myfont);
  text('Gregory Chan Design',530,680)
  //fixed type style
  noStroke();
  fill(30);
  textFont(Myfont);
  textSize(300);
  
  //image(img, 10, 515);
  //img.resize(280, 373);
 
  //if key is pressed it will show text
  if (keyCode === LEFT_ARROW) {
    text('龍马',30,300);
    text('精神',30,600);
    } else if(keyCode === UP_ARROW) {
    text('齐乐',30,300);
    text('龍龍',30,600);
    } else if(keyCode === RIGHT_ARROW) {
    text('龍光',30,300);
    text('焕发',30,600);
    }
  
  //background color and transparency
  background(255,41,67,20);
  
  textFont('Helvetica');
  //type that follow the mouse
  textSize(100);
  stroke(255);
  strokeWeight(1.5);
  fill(220,176,100);
  text('🐲', mouseX-100, mouseY+50);
  //textSize(mouseX*mouseY/500);
  
}

function mousePressed() {
  clear();
  background(255,41,67,5);
}

function keyPressed() {
  if (key == 's') {
    save("mySketch.png");
    //saveGif('01.gif', 30, {delay: 0, units : 'frames'});
    //saveGif('dragon.gif',5);
  }
  
    if (key == 'g') {
    //save("mySketch.png");
    //saveGif('dragon.gif', 30, {delay: 0, units : 'frames'});
    saveGif('dragon.gif',8);
  }
}

