const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject3;
var roofObject;
var world;



function setup() {
	createCanvas(400, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	roofObject = new Roof(200, 50, 200, 20);

	bobObject1 = new Bob(200, 200, 35);
	bobObject2 = new Bob(165, 200, 35);
	bobObject3 = new Bob(130, 200, 35);
	bobObject4 = new Bob(235, 200, 35);
	bobObject5 = new Bob(270, 200, 35);

	rope1 = new Rope(bobObject1.body,roofObject.body,-0*2,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-18*2,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,-35*2,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,+18*2,0);
	rope5 = new Rope(bobObject5.body,roofObject.body,+35*2,0);
    
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
 
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-25,y:25});
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:25,y:-25});
  	}
}   
