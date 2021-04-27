
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(900, 400);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  paper=new Paper(100,100,25)
	ground=new Ground(450,385,900,30)
	bin1= new Bin(650,360,130,15)
	bin2= new Bin(580,325,15,65)
	bin3= new Bin(720,325,15,65)
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.paper,paper.paper.position,{x:15,y:-15})
  }
}

