
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, dustbin1,dustbinmid,dustbin3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	paper=new Paper();
dustbinmid=new Dustbin(600,675,200,20);
dustbin1= new Dustbin(500,675,20,200);
dustbin3 = new Dustbin(700,675,20,200)

ground= new Ground(400,690,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display();
 dustbinmid.display();
 dustbin1.display();
 dustbin3.display();
 ground.display();
}
function keyPressed (){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
	}
}



