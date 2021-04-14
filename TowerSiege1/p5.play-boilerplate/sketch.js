const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  
  block1=new box(209,235,30,40);
  block2=new box(212,235,30,40);
  block3=new box(215,235,30,40);
  block4=new box(218,235,30,40);
  block5=new box(221,235,30,40);
  block6=new box(224,235,30,40);
  block7=new box(227,235,30,40);
  block8=new box(330,235,30,40);
  block9=new box(360,235,30,40);
  block10=new box(390,235,30,40);
  block11=new box(420,235,30,40);
  block12=new box(450,235,30,40);

  block13=new box(360,195,30,40);
  block14=new box(390,195,30,40);
  block15=new box(420,195,30,40);
  block16=new box(390,155,30,40);


  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);


  sling1=new SlingShot(polygon,{x:50,y:200});

  ground1=new ground(400,265,220,20);
  



  
}

function draw() {
  background(240,246,255);  
  Engine.run(engine);

 // block1.display();
 // block2.display();
 // block3.display();
 // block4.display();
 // block5.display();
 // block6.display();
//  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();


  ellipseMode(CENTER);
  ellipse(polygon.position.x,polygon.position.y,20, 20)

  sling1.display();

  ground1.display();
  
  



  
}

function mouseDragged()
{
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}


function mouseReleased()
{
  sling1.release();
}


function keyPressed(){
  if(keyCode===32)
  {
    SlingShot.attach(this.polygon);
  }
}