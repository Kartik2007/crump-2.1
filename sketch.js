
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj;
var paperObject;
var groundObject	
var world;


function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);
engine = Engine.create();
	world = engine.world;


	dustbinObj=new dustbin(900,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,70);

	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-85});
    
  	}
}





