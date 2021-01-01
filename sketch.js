const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var walkingImages;
var ground;
var thunderImages;
var man_walking,man,man_collided;

function preload(){
    
man_walking=loadImage("Walking Frame"/"walking_1.png","walking_2.png","walking_4.png",
"walking_5.png","walking_6.png","walking_7.png","walking_8.png")

man_collided=loadImage("Walking Frame"/"walking_3.png")





}

function setup(){
createCanvas(500,700)
engine = Engine.create();
  world = engine.world;
 
 //man=createSprite(590,200,200,20)
 //man.addImage("walking",man_walking)
 //man.addImage("collided",man_collided)
 
 
 
 
 
  ground = new Ground(width/2,590,width,20);
  rain1=new Rain(200,300,20,20);
  rain2=new Rain(300,500,20,20)
    rain3=new Rain(300,200,20,20)
    rain4=new Rain(200,500,20,20)
    rain5=new Rain(50,500,20,20)
    rain6=new Rain(200,100,20,20)
    rain7=new Rain(400,100,20,20)
   rain8=new Rain(50,100,20,20)
    rain9=new Rain(30,200,20,20)
    rain10=new Rain(40,50,20,20)
  rain11=new Rain(40,300,20,20)
  //  rain12=new Rain(450,50,20,20)
//    rain13=new Rain(300,500,20,20)
//    rain14=new Rain(300,500,20,20)
//    rain15=new Rain(300,500,20,20)
//    rain16=new Rain(300,500,20,20)
//    rain17=new Rain(300,500,20,20)
//    rain18=new Rain(300,500,20,20)
//    rain19=new Rain(300,500,20,20)
//    rain20=new Rain(300,500,20,20)
 //   rain21=new Rain(300,500,20,20)
   // rain22=new Rain(300,500,20,20)
//    rain23=new Rain(300,500,20,20)
//    rain24=new Rain(300,500,20,20)
//    rain25=new Rain(300,500,20,20)
//    rain26=new Rain(300,500,20,20)
//    rain27=new Rain(300,500,20,20)
//    rain28=new Rain(300,500,20,20)
umbrella = new Umbrella(200,500); 



}

function draw(){
    background("black")
    Engine.update(engine);

ground.display();
rain1.display();
rain2.display();
rain3.display();
      rain4.display();
      rain5.display();
      rain6.display();
     rain7.display();
     rain8.display();
      rain9.display();
      rain10.display();
      rain11.display();
   //   rain12.display();
 //     rain13.display();
//      rain14.display();
//      rain15.display();
//      rain16.display();
//      rain17.display();
//      rain18.display();
 //     rain19.display();
//      rain20.display();
 //     rain21.display();
 //     rain22.display();
 //     rain23.display();
  //    rain24.display();
  //    rain25.display();
  //    rain26.display();
  //    rain27.display();
  //    rain28.display();
umbrella.display();
drawSprites();

}   

