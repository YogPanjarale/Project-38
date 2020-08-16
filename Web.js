class Web{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 1
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sensitivity = 250
        this.stiffness = this.sling.stiffness;
        this.state = "idle"
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    join(body){
        this.sling.bodyA = body;
    }
    setTarget(x,y){
        this.pointB.x =x
        this.pointB.y =y
        this.state ="launched"
        this.sling.stiffness = 0.01
    
    }
    display(){  
       
        
        if(this.sling.bodyA){

            push()
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(250);
            strokeWeight(4)
            line(pointA.x+17, pointA.y +5,pointB.x, pointB.y)
           
           
           pop()
            var bodyx =this.sling.bodyA.position.x;var bodyy =this.sling.bodyA.position.y
            var pointx =this.pointB.x;var pointy =this.pointB.y
            
            var s =this.sensitivity
            if(this.state =="launched"){
                if(dist(bodyx,bodyy,pointx,pointy) < this.sensitivity&&this.sling.bodyA.speed<1){
                        this.sling.stiffness = 0.8;
                        this.sling.length = 1
                        this.state = "idle"
                       this.fly();
                       console.log("fly by lack of speed")
                }else if (dist(bodyx,bodyy,pointx,pointy) >= this.sensitivity) {
                    this.sling.length = dist(bodyx,bodyy,pointx,pointy) * 0.05
                } 
              }
            else if(this.state == "idle"){
                this.sling.length = 1
            }
           
        }
    }
    
}