
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(400,400)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display;
  key();

  drawSprites();
 
}

function key(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper , paper.x=85 , paper.y=85)
	}
}



