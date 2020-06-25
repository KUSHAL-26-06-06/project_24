var paperObject;
var ground;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

    box1=createSprite(670,600,200,20);
	box2=createSprite(560,570,20,100);
	box3=createSprite(780,570,20,100);

	engine = Engine.create();
	world = engine.world;
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 paperObject=Bodies.circle(100,600,20,options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
   box1.shapeColor="white";
   box2.shapeColor="white";
   box3.shapeColor="white";
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	   
	 }


	}
