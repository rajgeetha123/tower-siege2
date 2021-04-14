class box{
    constructor(x,y,width,height){

        var options={
            isStatic:true
        }

        this.box=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.box);
        this.visibility=255;
    }

    display(){
        var pos=this.box.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,50,50);

        if(this.box.speed<3){
            World.add(world,this.box);
        }
        else {
            World.remove(world,this.box);
        }
push()
        this.visibility=this.visibility-4;
      tint(255,this.visibility);
pop()
    }
}