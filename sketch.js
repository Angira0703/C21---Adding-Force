const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var buttonTop, buttonRight;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  ball_options ={
    restitution: 0.1
    
  }

  ball = Bodies.circle(200, 100, 15, ball_options);
  World.add(world, ball);

  buttonTop = createImg("up.png");
  buttonTop.position(100,30);
  buttonTop.size(50, 50)
  buttonTop.mouseClicked(vForce);

  buttonTop = createImg("right.png");
  buttonTop.position(160,30);
  buttonTop.size(50, 50)
  buttonTop.mouseClicked(hForce);
  



 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();

  ellipse(ball.position.x, ball.position.y, 15);
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.02, y: 0});

}

function vForce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0, y: 0.02});

}

