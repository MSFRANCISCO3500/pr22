const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  var ball2_options = {
    restitution : 0.3,
    frictionAir : 0.9
  } 
  var ball3_options = {
    restitution : 0.3,
    frictionAir : 0.9
  } 
  ball = Bodies.circle(150,20,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
                                         
  ball2=Bodies.rectangle(100,100,100,50,ball2_options);
  World.add(world,ball2)
  rectMode(CENTER);
  ellipseMode(RADIUS);

   ball3=Bodies.rectangle(233,100,100,50,ball3_options);
   World.add(world,ball3)
   rectMode(CENTER);
   ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
  rect(ball2.position.x,ball2.position.y,100,50)
  rect(ball3.position.x,ball2.position.y,100,50)
} 

