var w = window.innerWidth;
var h = window.innerHeight; 

function setup() {
  createCanvas(w,h);
  Myfont = loadFont('SmileySans-Oblique.otf');
}


function draw() {
  textFont(Myfont);
  background(220,20);
  text('龍', mouseX, mouseY);
  textSize(mouseX*mouseY/100);
  stroke(255);
  fill('teal');  
}

  function mousePressed() {
  clear();
  background(220);
  describe('The canvas is cleared when the mouse is clicked.');
}