  class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    fly(){
    this.chain.bodyA = null
    }
    attach(bodyA){
        this.chain.bodyA=bodyA;
    }
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(1);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}