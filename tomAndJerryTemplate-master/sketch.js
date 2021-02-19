
var cat ,catImage,mouseImage,garden,gardenImage;



function preload() {
    //load the images here

catRunnimgAnimation=loadAnimation("cat2.png","cat3.png");
mouserunningAnimation=loadAnimation("mouse2.png","mouse3.png");
cheesemouse=loadAnimation("mouse1.png");
catSitting=loadAnimation("cat1.png");
catStanding=loadAnimation("cat4.png");
mouseStandig=loadAnimation("mouse4.png");
gardenImage=loadImage("garden.png");


}

function setup(){
    background("white");
    createCanvas(1000,1000);

    //create tom and jerry sprites here

garden=createSprite(500,500,0,0);
garden.addImage=(gardenImage);
garden.scale=0.8;


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
