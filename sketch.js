
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paper(100,100,20)
	ground=new Ground(750,680,1500,20)
	rect1=new Dustbin(1000,550,600,20)
	rect2=new Ground(800,600,20,200)
	rect3=new Ground(1200,600,20,200)
    

	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}
}
function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();
 paper.display();
 ground.display();
 rect1.display();
 rect2.display();
 rect3.display();
}

