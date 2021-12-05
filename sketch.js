
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground

function preload()
{
	
}

function setup() {
	createCanvas(1100, 450);
    var ball_options = {
		isStatic:false,
		restitution:0.0,
        friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,-10,10,ball_options);
	World.add(world,ball);


	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	ground = new Ground(1000,450,2000,15);
	leftside = new Ground(850,400,10,150);
	rightside = new Ground(1000,400,10,150);

  
}


function draw() {
  background(0);


  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
  ground.display();
  leftside.display();
  rightside.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		hForce();
		vForce();
	}
}
function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:1.5,y:0});
}
function vForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-1.5});
}
