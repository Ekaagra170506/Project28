class Mango {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1
      }
      this.body = Bodies.circle(x,y,radius/3,options);
      this.radius = radius;
      this.height=40;
      this.x=x;
      this.y=y;
      this.image = loadImage("sprites/mango.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0,this.radius,this.height);
      pop();
    }
  };
 
