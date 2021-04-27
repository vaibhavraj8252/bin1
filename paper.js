class Paper{
    constructor(x,y,r){
        var paper_features = {
            isStatic : false,
            restitution:0.1,
            friction:2,
            density:1.2}
          this.paper = Bodies.circle(x,y,r/2,paper_features)
          World.add(world,this.paper)
          this.r=r;
          
    }
    display(){
        push ()
        translate (this.paper.position.x,this.paper.position.y)
        rotate (this.paper.angle)
        ellipseMode(CENTER)
        ellipse(0,0,this.r)
        pop ()
        
    }
}