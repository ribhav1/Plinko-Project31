const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var peg1;
var pegs = [];

var particles = [];

var ground;

var divider1;
var dividers = [];

function setup(){
  createCanvas(700,730);

  engine = Engine.create();
  world = engine.world;

  ground = new box(350, 715, 700, 30, true);

  for(var i = 10; i <= 690; i += 136){
    divider1 = new box(i, 600, 20, 200, true);
    dividers.push(divider1);
  }
  /*I didn't use the following double for loop 
    because I couldn't figure out of to offeset
    the x value of every other row

  for(var x = 30; x <= 675; x += 60){
      for(var y = 50; y <= 450; y += 100){
        peg1 = new peg(x + 20, y, 30, true);
        pegs.push(peg1);
    }
  }*/
  for(var x = 30; x <= 675; x += 60){
    peg1 = new peg(x + 20, 70, 8, true);
    pegs.push(peg1);
  }
  for(var x = 60; x <= 635; x += 60){
    peg1 = new peg(x + 20, 120, 8, true);
    pegs.push(peg1);
  }
  for(var x = 30; x <= 675; x += 60){
    peg1 = new peg(x + 20, 170, 8, true);
    pegs.push(peg1);
  }
  for(var x = 60; x <= 635; x += 60){
    peg1 = new peg(x + 20, 220, 8, true);
    pegs.push(peg1);
  }
  for(var x = 30; x <= 675; x += 60){
    peg1 = new peg(x + 20, 270, 8, true);
    pegs.push(peg1);
  }
  for(var x = 60; x <= 635; x += 60){
    peg1 = new peg(x + 20, 320, 8, true);
    pegs.push(peg1);
  }
  for(var x = 30; x <= 675; x += 60){
    peg1 = new peg(x + 20, 370, 8, true);
    pegs.push(peg1);
  }
  for(var x = 60; x <= 635; x += 60){
    peg1 = new peg(x + 20, 420, 8, true);
    pegs.push(peg1);
  }
  for(var x = 30; x <= 675; x += 60){
    peg1 = new peg(x + 20, 470, 8, true);
    pegs.push(peg1);
  }

  Engine.run(engine);
}

function draw(){
    background(0);
    rectMode(CENTER);
    noStroke();
    //Engine.update(engine);

    if(frameCount % 20 === 0){
      var particle1 = new particle(random(45, 660), -10, 13);
      particles.push(particle1);
      }

      for(var i = 0; i < particles.length; i++){
        particles[i].display();
        if (particles[i].isOffScreen()){
          particles[i].removeFromWorld();
          particles.splice(i, 1); 
          i--;
      }
    }
    for(var i = 0; i < pegs.length; i++){
        pegs[i].display();
    }
    for(var i = 0; i < dividers.length; i++){
      dividers[i].display();
  }
    ground.display();

  }

