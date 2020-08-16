const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player,web
var Score=0;
function preload(){
  city = loadImage("city.png")
}
function setup() {
  console.log("1.4")
  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);
  //scale(1000/height)
  engine = Engine.create();
  world = engine.world;
  player = new SpiderMan(width/2,height/2)
  web = new Web(player.body,{x:player.body.position.x,y:player.body.position.y})
  roof = newWall(400,0,100000,height*0.01);
  base1 = newWall(400,height*1.5,100000,height*0.1)
  base = newWall(width/5,height*0.75,width,height*0.1)
  //base = newWall(width/5,height*0.75,width,height*0.1)
  wall =newWall(0,height/2,100,height*5)
  for(let i =1;i<500;i+=2){
    newWall(i*200+random(200,400),random(height*2/3,height*4/5),random(100,300),random(50,height/5))
  }
  for(let i =1;i<500;i+=2){
    newWall(i*200+random(200,400),50,random(height*0.1,height*0.3),random(height*0.05,height*0.15))
  }
  web.fly()
  lose =new LoseHud();
}
var gameState = 0
function draw() {
  
  background(city,width*5,height); 
  image(city,camera.position.x*18,height/2, width, height) 
  Engine.update(engine);
  
  player.display();
  web.display()
 drawWalls()
  drawSprites();
  joystick = new Joystick(width/2,height*4/5,50)
    camera.position.x = player.body.position.x;
   // camera.position.y = player.body.position.y;
  ScoreHud()
  if(gameState==1){
    lose.display()
  }
  if(player.body.position.y>height){
    gameState=1
  }
}
function ScoreHud(){
  push()
  translate((camera.position.x - width/2),(camera.position.y - height/2))
  if(player.body.position.x>Score){Score = player.body.position.x}
   
   textSize(30)
  textAlign(CENTER);
  fill(20)
  text("Score: "+int(Score/100),width/2,height/7)
  fill(255,250,205)
  textSize(20)
  text("Use Arrow Keys To Move",width/2,height*0.8)
  text("Click on Brown Area to Swing There",width/2,height*0.88)
  pop()
}
function mouseClicked(){
  if(gameState==0)
 { for(let i =0;i<walls.length;i++) {
    if(walls[i].isCliked()==true){
      web.join(player.body)
      web.setTarget(mouseX+(camera.position.x - width/2),mouseY+(camera.position.y - height/2))
    }
    //console.log("mouse")
  };
    }

  
}
function  keyPressed(){
  if(gameState==0)
  {if(keyCode == 40){
    web.fly()
  }
  if(keyCode ==39){
    move("right")
  }
  if(keyCode ==38){  
    move("up")
  }
  if(keyCode ==37){
   move("left")
  }}
  
}
function move(pos){
  switch (pos) {
    case "left":
      Matter.Body.applyForce(player.body, player.body.position, {x:-55,y:0})      
      break;
    case "right":
      Matter.Body.applyForce(player.body, player.body.position, {x:55,y:0})      
      break;
    case "up":
      if(player.body.velocity.y<5){
        Matter.Body.applyForce(player.body, player.body.position, {x:0,y:-65})
      }
      else if(player.body.velocity.y>5){
        Matter.Body.applyForce(player.body, player.body.position, {x:0,y:-30})
      }    
      break;  
  
    default:
      break;
  }
}
