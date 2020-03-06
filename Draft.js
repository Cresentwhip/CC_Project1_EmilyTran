*************
/*
Adjective: suffocating
balloon in the center "breathing" 
slowly it gets bigger, changing color when it inflates
walls are sharp and chomp inward constantly

*/
var a,b,c,x,y;
Balloon theDefault= new Balloon();

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	r= random(0,255); //color change variables
	g= random(0,255);
	b= random(0,255);
	x=0;
	y=0;
}

function draw() {

	//had not touched the walls
	
	if (x<=windowWidth || y<=windowHeight){ 
		ballWidth++;
		ballHeight++;
		for (var i=0; i<100;i++){  //while it inflates, it changes color
		balloons.push (new Balloon(random(width), random(height))
		}
	}
	else{	
	}
	ellipse(mouseX, mouseY, 20, 20);
}

class Balloon {
	constructor (x,y,r){
	this.x=x
	}
	
	Balloon() {
		ellispe (
	}
}
