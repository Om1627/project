const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;



var wall1,wall2,mainwall,gate,top1,top2;



function setup() {
 
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  gate=new Rect(400,300,125,100);
 
  wall1=new Rect(100,200,100,350);
  wall2=new Rect(700,200,100,350);
  fill(255);
  
  mainwall= new Rect(400,200,550,300);

}

function draw() {
  background(0,0,255);  
  Engine.update(engine);

  mainwall.display();
  gate.display();
  wall1.display();
  wall2.display();
 
}