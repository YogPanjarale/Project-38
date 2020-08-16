function Joystick(x,y, r) {
    this.pos = createVector(x, y);
    this.stickPos =createVector(x,y); 
    this.r = r;
    this.controls = false;
    this.finger;
    this.value = createVector(0,0);
    this.render = function() {
       stroke(0,100,200,100);
      strokeWeight(this.r / 20);
      fill(0,100,250,100);
      ellipse(this.pos.x,this.pos.y, this.r);
         stroke(0,150,200);
      strokeWeight(this.r/5);
      line(this.pos.x, this.pos.y,this.stickPos.x, this.stickPos.y);
      
    } 
    this.activateJoystick = function(activate) {
      this.finger = createVector(mouseX, mouseY);
      var distance = dist(this.finger.x,this.finger.y, this.pos.x,this.pos.y);
     if (distance < this.r / 2 && activate)  {
      this.controls = true;        
      } else{
        this.stickPos.x= this.pos.x;
        this.stickPos.y= this.pos.y;      
        this.controls = false;
      }
    }
  
    this.update = function(){
     if (this.controls){
        this.finger = createVector(mouseX, mouseY);
        this.stickPos = p5.Vector.sub(this.finger, this.pos);
        this.stickPos.limit(this.r/2);
        this.value.x = this.stickPos.x;
        this.value.y = this.stickPos.y;      
        this.stickPos = p5.Vector.add(this.pos,this.stickPos);
      }
    }
    this.getValue = function(v){
      this.value = this.value.mult(v);
      
    }
  this.getX = function(){
      this.getValue(0.2);
      return this.value.x;
  }
  this.getY = function(){
      this.getValue(1);
      return this.value.y;
  }
  }