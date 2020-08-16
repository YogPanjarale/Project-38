var walls = []
class Wall {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      stroke(1, 1, 1, 1)
      fill("#C58020");
      rect(pos.x, pos.y, this.width, this.height);
    }
    isCliked(a= {x:this.body.position.x,y:this.body.position.y,width:this.width,height:this.height}, b={
      x:mouseX+(camera.position.x - width/2),
      y:mouseY+(camera.position.y - height/2),
      width:2,height:2
    
    }){
     //console.log("entered")
      if (a.x - b.x < b.width/2 + a.width/2
        && b.x - a.x < b.width/2 + a.width/2
        && a.y - b.y < b.height/2 + a.height/2
        && b.y - a.y < b.height/2 + a.height/2){
          console.log("cliked")
            return true;
           
        }
       
        return false
    }
  };
  function newWall(x,y,width,height){
      var wall = new Wall(x,y,width,height)
      walls.push(wall)
      return wall
  }
  function drawWalls(){
      walls.forEach(element => {
          element.display();
      });
  }