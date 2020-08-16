class Paper {
    constructor(x,y) {
      var options = {
          friction:0.5,
          restitution: 0.3,
          isStatic:false,
          density:1.2
      }
      this.body = Bodies.circle(x,y,r,options);
      this.image = loadImage()
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y,);
    }
  };