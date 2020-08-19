class SpiderMan extends BaseClass {
  constructor(x,y){
  if(height/20 >40){
    super(x,y,height/12,height/12);
  }else if(height/20 <40){
    super(x,y,50,50);
  }
    
    this.image = loadImage("SpiderMan.png");
   // this.smokeImage = loadImage("sprites/smoke.png");
  
    
  }
  
  
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    
     
   
  
  }
}
