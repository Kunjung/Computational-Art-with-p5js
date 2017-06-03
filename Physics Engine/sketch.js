
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;

function setup() {
    createCanvas(800, 400);
   	engine = Engine.create();
   	world = engine.world;
   	Engine.run(engine);
   	var options = {
   		isStatic: true
   	}
   	ground = Bodies.rectangle(400, height, width, 10, options);
   	World.add(world, ground);
}

function mouseDragged() {
	boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw() {
	background(55);
	for (var i = 0; i < boxes.length; i++) {
    	boxes[i].show();
	}
	strokeWeight(12);
	stroke(0);
	line(0, height, width, height);

    
}