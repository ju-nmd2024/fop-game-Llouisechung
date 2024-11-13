function setup() {
  createCanvas(800, 600);
}


let x= 350;
let y= 100;

noStroke();


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



function draw() {
  background(0,0,21);
spaceship(x,y);


}

