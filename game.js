let x= 512;
let y= 100;

let gravity = 0.1;
let speed = 1;
let groundY;
let gameState = "You Lose!";

//sparkling night sky (code from video example)
let starX = [];
let starY = [];
let starAlpha = [];


function setup() {
  createCanvas(1024, 768);
  noStroke();

}

for (let i = 0; i < 70; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

function spaceship(x,y){

 

    //spaceship main body

push();
translate(x+10, y);
fill(180, 0, 45);
ellipse(0,0, 140, 160);
pop();

push();
translate(x+10, y+75);
fill(180, 0, 45);
ellipse(0,0, 70, 70);
pop();



//wings 
push();
translate(x-260, y+40);
stroke(180, 0, 45);
strokeWeight(15);
angleMode(DEGREES);
rotate(-45);
line(0, 0, 400, 400);
pop();

push();
translate(x-230, y+40);
angleMode(DEGREES);
rotate(-45);
stroke(180, 0, 45);
strokeWeight(25);
line(0,0,350, 350);
pop();

push();
translate(x-185, y+25);
fill(180, 0, 45);
rect(0,0,400, 30);
pop();

//wings oval parts left
push();
noFill();
translate(x-100,y+17);
angleMode(degrees);
rotate(45);
stroke(180, 0, 45);
strokeWeight(9);
arc(0,0,300, 320, 90, 170);
pop();


//wings oval parts right
push();
noFill();
translate(x+140,y+20);
scale(-1,1);
angleMode(degrees);
rotate(48);
stroke(180, 0, 45);
strokeWeight(9);
arc(0,0,300, 330, 90, 170);
pop();

//body details red parts
push();
translate(x-50, y-70);
angleMode(DEGREES);
rotate(40);
fill(122, 0, 0);
rect(0,0,40, 35, 8);
pop();

push();
translate(x+40, y-45);
angleMode(DEGREES);
rotate(-35);
fill(122, 0, 0);
rect(0,0,40, 35, 8);
pop();

//back part INNER 
push();
translate(x+10, y);
fill(20,20,20);
ellipse(0,0, 150, 100);
pop();

push();
translate(x+10, y);
fill(0,0,0);
ellipse(0,0, 70, 70);
pop();

push();
noFill();
translate(x+10, y);
stroke(100,100,100);
strokeWeight(3);
ellipse(0,0, 150, 100);
pop();

push();
noFill();
translate(x+10, y);
stroke(34,34,34);
strokeWeight(3);
ellipse(0,0, 40, 40);
pop();

push();
translate(x-2, y+70);
angleMode(DEGREES);
rotate(-1);
fill(34,34,34);
rect(0,0,20, 60);
pop();

//back part OUTER RIM

push();
translate(x+10, y);
noFill();
stroke(51,38,37);
strokeWeight(12);
ellipse(0,0, 180, 140);
pop();

push();
translate(x+10, y);
noFill();
stroke(90,0,19);
strokeWeight(7);
ellipse(0,0, 180, 160);
pop();

push();
translate(x+10, y);
noFill();
stroke(139,0,0);
strokeWeight(6);
ellipse(0,0, 190, 160);
pop();


//outer rim red details
push();
fill(139,0,0);
translate(x+4,y-80);
angleMode(DEGREES);
rotate(188);
triangle(0,0, 0, 50,- 15, 0);
pop();

push();
fill(139,0,0);
translate(x+15,y+80);
angleMode(DEGREES);
rotate(7);
triangle(0,0, 0, 50,- 15, 0);
pop();

push();
translate(x-35, y);
stroke(180, 0, 45);
strokeWeight(20);
angleMode(DEGREES);
rotate(100);
line(0, 0, 10, 60);
pop();

push();
translate(x+115, y);
stroke(180, 0, 45);
strokeWeight(20);
angleMode(DEGREES);
rotate(100);
line(0, 0, 10, 60);
pop();

}

function planet(x, y){

  let holes = [];

  //planet floor
  push();
  fill(66, 56, 35);
  rect(-10 ,700, 1100, 100);
  pop();


}

function startScreen() {
  //rectangle bar

  push();
  fill(100);
  rect(390, 320, 230, 60, 100);
  pop();

//start text

  push();
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  textFont('helvetica');
  textStyle(BOLDITALIC);
  text("PRESS START", 505, 350);
  pop();

  //"see you space cowboy- quote"

  push();
  fill(255);
  textSize(25);
  textFont('monospace');
  textStyle(BOLDITALIC);
  text("SEE YOU SPACE COWBOY...", 600, 650);
  pop();
}

function gamePlay() {
  spaceship(x,y);
  if (keyIsPressed(32)) {
    gravity = -0.03;
  } else {
    gravity = 0.03;
  }

  speed =speed + gravity;
  y = y+ speed;
  if (y > 560 && speed <= 2) { 
  gameState = "gameSucceeded";
  } else if (y > 560 && speed > 2)
    gameState = "gameOver";
}

function gameWinning() {
 
  push();
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  textFont('monospace');
  textStyle(BOLDITALIC);
  text("LANDING SUCCESS!", 505, 250);
  pop();
}

function gameOver() {
  push();
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  textFont('monospace');
  textStyle(BOLDITALIC);
  text("OOPS! TRY AGAIN", 505, 250);
  pop();
}

function restart() {
  //rectangle bar

  push();
  fill(100);
  rect(390, 320, 230, 60, 100);
  pop();

  //restart text

  push();
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  textFont('helvetica');
  textStyle(BOLDITALIC);
  text("RESTART", 505, 350);
  pop();



}

function draw() {
  background(0);
  spaceship(x,y);
  planet(x,y);



  //game stages

  if (gameState === "start") {
    startScreen();
  } else if (gameState === "playing") {
    gamePlay();
  } else if (gameState === "gameOver") {
    gameOver();
    restart();
  } else if (gameState === "gameSucceeded") {
    gameWinning();
    restart();
  }

  //stars blinking 
for (let index in starX) {
  fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index]) * 255));
ellipse(starX[index], starY[index], 3);
starAlpha[index] = starAlpha[index] + 0.03;
}
}

function mouseClicked() {
  if (gameState === "start" &&
    mouseX > 230 && 
    mouseX < 620 &&
    mouseY > 90 &&
    mouseY < 380
  ) {
    gameState === "playing";
    gravity =0.1;
    speed = 0.5;
  } else if (gameState === "gameOver" &&
    mouseX > 230 && 
    mouseX < 620 &&
    mouseY > 90 &&
    mouseY < 380
  ) {
    gameState === "start";
    gravity =0.1;
    speed = 0.5;
    y = 100;
  } else if (gameState === "gameSucceeded" &&
    mouseX > 230 && 
    mouseX < 620 &&
    mouseY > 90 &&
    mouseY < 380
  ) {
    gameState === "start";
    gravity =0.1;
    speed = 0.5;
    y = 100;
  }
}






      



     






 

