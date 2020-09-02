class Paper{
    constructor(x,y,radius){
        var options = {
            'restitution': 0.5,
            'friction' : 1.0,
            'density' : 1.5
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("white");
        fill("gray");
        ellipseMode(CENTER);
        ellipse(0,0,this.width,this.height);
        pop();
    }

}