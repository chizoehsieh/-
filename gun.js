class Gun{
  constructor(x, y, w, h){
    this.body = Matter.Bodies.rectangle(x, y, w, h);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
  }
  
  show(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(GUNimg,0, 0, this.w, this.h);
    pop();
  }
}