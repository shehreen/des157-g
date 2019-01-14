
console.log('reading.js');


function setup() {
  //size is createCanvas in p5
  //create a variable to reference the canvas
var myCanvas = createCanvas(800, 250);
background(255);


myCanvas.parent('mySketch');

}

function draw() {

//eighth note
smooth(); fill(190,50,50); stroke(0,200); ellipse (100,200,100,100);
smooth(); stroke(0,200); line (150,200,200,50);
smooth(); stroke(0,200); line (130,160,180,10);
smooth(); stroke(0,200); line (180,10,350,60);
smooth(); stroke(0,200); line (200,50,305,80);
smooth(); stroke(0,200); line (305,80,270,210);
smooth(); stroke(0,200); line (350,60,290,250);
smooth(); fill(190,50,50); stroke(0,200); ellipse (240,250,100,100);

//draw cirlces
fill(190,50,50);
stroke(0,0,0);
ellipse(mouseX, mouseY, 100, 100);

}
