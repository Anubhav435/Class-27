class chain{
    constructor(bodya,bodyb){

    
    var options={
        bodyA:bodya,bodyB:bodyb,stiffness:0.08,length:60
    }
    this.chain1=Rope.create(options);
    World.add(world,this.chain1);
    }
    display(){
        var pointA=this.chain1.bodyA.position
        var pointB=this.chain1.bodyB.position
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}