const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer , plane , stone , iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = Engine.World;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(200,300,40,40);
    stone = new Stone(400, 250, 40,40);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    stone.display();

    
 
}