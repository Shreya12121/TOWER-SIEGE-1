const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,Stand1,Stand2;

function preload() {}

function setup () {
 ground = new Ground(600,height,1200,20);
 Stand1 = new Ground(600,height,1200,20);
 Stand2 = new Ground(600,height,1200,20);
}

function draw() {
    background(225);
    ground.display();
    Stand1.display();
    Stand2.display();
}