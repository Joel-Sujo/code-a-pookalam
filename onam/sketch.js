function setup() {
  createCanvas(1000, 1000);
  background(255, 254, 205);
  angleMode(DEGREES);
}
function draw() {
  translate(width/2,height/2);
  for (let i=0;i<18;++i){
    push();
    rotate(i*20);
    fill(16, 153, 0);
    ellipse(0,-370,70,160);
    fill(23, 227, 0);
    ellipse(0,-340,70,160);
    pop();
  }
  fill(255, 191, 45);
  stroke(252, 255, 0);
  strokeWeight(20);
  circle(0,0,740);
  noFill();
  noStroke();
  for (let i=0;i<10;++i){
    push();
    rotate(i*36);
    fill(0, 41, 247);
    ellipse(0,-185,70,160);
    fill(255, 106, 100);
    ellipse(0,-175,50,110);
    pop();
  }
  for (let i=0;i<36;++i){
    push();
    rotate(i*10);
    fill(14, 135, 0);
    ellipse(0,-300,30,20);
    pop();
  }
  for (let i=0;i<700;++i){
    push();
    rotate(i*1);
    fill(255, 0, 0);
    square(0,-340,20);
    pop();
  }
  fill(158, 39, 255);
  circle(0,0,360);
  noFill();
  fill(11, 196, 0);
  circle(0,0,330);
  fill(255, 254, 0);
  circle(0,0,300);
  for (let i=0;i<5;++i){
    push();
    rotate(i*72);
    fill(255, 0, 0);
    ellipse(0,-90,60,110);
    fill(252, 172, 0);
    ellipse(0,-75,50,80);
    pop();
  }
  fill(13, 181, 0);
  square(-60,-60,120,5);
  fill(0, 1, 255);
  square(-50,-50,100,15);
  fill(255, 101, 0);
  square(-40,-40,80,25);
  fill(255, 0, 0);
  square(-30,-30,60,35);
  fill(252, 255, 0);
  square(-20,-20,40,50);
}
