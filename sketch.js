const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	boyImg = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20);

	tree = new Tree(620,200);

	stone = new Stone(140,300);

	mango1 = new Mango(680,100,40);
	mango2 = new Mango(600,70,40);
	mango3 = new Mango(540,150,40);
	mango4 = new Mango(620,140,40);
	mango5 = new Mango(720,150,40);

	chain = new Chain(stone.body,{x:140,y:300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220,220,220);
  image(boyImg,120,250,120,170);
  textSize(17)
  text("Press Space to get a second Chance to Play!!",20,30)

  detectollision(stone,mango1)
  detectollision(stone,mango2)
  detectollision(stone,mango3)
  detectollision(stone,mango4)
  detectollision(stone,mango5)

  
  ground.display();
  tree.display();
  stone.display();
  chain.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();


  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}   

function keyPressed(){
	if(keyCode=== 32){
    Matter.Body.setPosition(stone.body,{x:140,y:300});
    chain.attach(stone.body);
	}
}


function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

    var distance = dist(stoneBodyPosition.x ,stoneBodyPosition.y ,mangoBodyPosition.x ,mangoBodyPosition.y)
    
	if(distance<=lmango.r + lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}



