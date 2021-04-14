class SlingShot{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            pointB:body2,
            stiffness:0.1

        }

        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }


    attach(body){
      this.sling.bodyA=body;
    }




    release(){
        this.sling.bodyA=null;
    }


    display(){
        if(this.sling.bodyA){
            var  x1=this.sling.bodyA.position.x
             var y1= this.sling.bodyA.position.y
             var  x2=this.sling.pointB.x
             var  y2=this.sling.pointB.y
             push();
             strokeWeight(4)
             line(x1,y1,x2,y2)
             pop();
             }
    }
}