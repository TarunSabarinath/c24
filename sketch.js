const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var bird1;
var log1;
function setup(){
    var canvas = createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,300,50,50);
    box2 = new Box(850,100,50,50);
    ground = new Ground(600,height,1300,20)
    pig1 = new Pig(900,200) ;
    bird1 = new Bird(100,200)
    log1 = new Log(1000,300,20,PI/7) ;
}   

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird1.display();
    log1.display();

}