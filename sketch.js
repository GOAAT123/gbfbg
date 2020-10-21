const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1;
var roof;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(600, 500);
  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(100, 320, 50);
	bob2 = new Bob(140, 320, 50);
	bob3 = new Bob(180, 320, 50);
	bob4 = new Bob(220, 320, 50);
	bob5 = new Bob(260, 320, 50);
	roof = new Roof(222,50,370,40);
  rope1= new Rope(bob1.body, roof.body, -bob1.diameter*2, 0);
  rope2= new Rope(bob2.body, roof.body, -bob2.diameter, 0);
  rope3= new Rope(bob3.body, roof.body, 0, 0);
  rope4= new Rope(bob4.body, roof.body, bob4.diameter, 0);
  rope5= new Rope(bob5.body, roof.body, bob5.diameter*2, 0);
  
	// Engine.run(engine);
}

function draw() {
  // rectMode(CENTER);
  background(255, 255, 255);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() { 
  if (keyCode === UP_ARROW) { 
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); 
  if (Matter.Body.applyForce(bob1.body,bob1.body.position,{x:200,y:400}))
   { Matter.Body.applyForce(bob5.body,bob1.body.position,{x:250,y:245});
   } } } 
   function drawLine(constraint) { 
  bobBodyPosition=constraint.bodyA.position 
  roofBodyPosition=constraint.bodyB.position 
  roofBodyOffset=constraint.pointB; 
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x 
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y 
  line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY); }