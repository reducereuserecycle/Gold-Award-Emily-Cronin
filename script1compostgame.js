/* global createCanvas, frameRate, background, loadImage, image, noStroke, fill, rect, width, text, score, keyIsPressed, keyCode, LEFT_ARROW, RIGHT_ARROW,
WormPositionX, WormPositionY, textSize, ellipse, mouseIsPressed, mouseX, mouseY, imageone, loadSound*/

var worm, apple, wrapper, orange, cracker, leaves, meat, fries, carton, bottle, coffee, eggshell, butter, checkmark, redx;
var score, lives, GameOn, sleep;
var WormPositionX, WormPositionY, ApplePosition;
var RightSideOfWorm, LeftSideOfWorm;
var LeftSideOfApple, RightSideOfWrapper;
var LeftSideOfOrange, RightSideOfCracker;
var LeftSideOfFries, RightSideOfLeaves;
var LeftSideOfCoffee, RightSideOfMeat;
var LeftSideOfBottle, RightSideOfCarton;
var LeftSideOfEggshell, RightSideOfButter;
var gameContext, wormActive;


function setup(){
  createCanvas(800, 500);
  frameRate(75);
  background(255, 255, 255);
  
  score = 0;
  lives = 3;
  GameOn = true;
  
  initializeWorm();
  gameContext = 0;
  
  worm = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FWormClipart2.jpg?v=1594929905517');
  apple = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FAppleClipart.jpg?v=1594930312712');
  wrapper = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FFoodWrapper.png?v=1594931298566');
  orange = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FOrange.png?v=1595120855872');
  cracker = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FCrackers.png?v=1595120908840');
  leaves = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FLeaves.png?v=1594938075405');
  fries = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FFriesClipart.jpg?v=1595183578517');
  meat = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FMeat.png?v=1594938560578');
  coffee = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FCoffeeGrinds.jpg?v=1594938373143');
  carton = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FEggCarton.png?v=1594938493289');
  bottle = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FPlasticWaterBottle.png?v=1595032526576');
  eggshell = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FEggshellClipart.jpg?v=1595188045109');
  butter = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FButterClipart.jpg?v=1595188746607');
  checkmark = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FGreenCheckmark.jpg?v=1594934689873');
  redx = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FRedX.jpg?v=1594935161087');
  
}


function draw() {
  if (GameOn == true) {
    
    if (gameContext == 0) {
      appleWrapper();
    }
    
    if (gameContext == 1) {
      crackerOrange();
    }
    
    if (gameContext == 2) {
      leavesFries();
    }
    
    if (gameContext == 3) {
      meatCoffee();
    }
    
    if (gameContext == 4) {
      cartonBottle();
    }
    
    if (gameContext == 5) {
      eggshellButter();
    }
    
  }
  else {
    background(245, 220, 59);
    
    //FUN FACT BOX
    fill(255, 255, 255);
    rect(150, 110, 500, 380, 60);

    //GAMEOVER
    fill(0);
    textSize(50);
    text("Game Over!", 270, 80);
    
    //DATA
    textSize(40);
    text("Score: " + score, 320, 230);
    text("Remaining Lives: " + lives, 240, 295);
    
    //RESTART BUTTON
    fill(245, 220, 59);
    rect(245, 390, 300, 75, 40);
    fill(0);
    textSize(33);
    text("Restart", 340, 436);
    
    //RESTART GAME
    if (mouseIsPressed) {
        if (mouseX > 245 && mouseX < 545 && mouseY > 390 && mouseY < 465) {
          setup();
        }
    }
  }
}



function displayBackground () {
  
    background(255, 255, 255);
    
    //DIRT
    noStroke();
    fill(97, 61, 7);
    rect(0, 300, width, 250);
    //rect(x top L, y top L, width, height)
    
    //LIVE CIRCLES
    if (lives == 3) {
      ellipse(30, 30, 25);
      ellipse(30, 70, 25);
      ellipse(30, 110, 25);
    }
    else if (lives == 2) {
      ellipse(30, 30, 25);
      ellipse(30, 70, 25);
    }
    else if (lives == 1) {
      ellipse(30, 30, 25);
    }
  
    //SCORE
    fill(173, 137, 78);
    rect(320, 15, 200, 60, 60);
    fill(0);
    textSize(32);
    text("Score: " + score, 365, 55);
}


function initializeWorm() {
  WormPositionX = 370;
  WormPositionY = 215;
  wormActive = true;
}


function appleWrapper() {
  
    if (wormActive == true) {
      displayBackground();
      
      //IMAGES
      image(worm, WormPositionX, WormPositionY, 80, 85);
      //image(img, x top L, y top L, width, height)
      image(apple, 600, 140, 150, 155);
      image(wrapper, 40, 130, 200, 170);

      //WORM CONTROLS
      if (keyIsPressed && keyCode == LEFT_ARROW){
        WormPositionX = WormPositionX - 4;
      }
      if (keyIsPressed && keyCode == RIGHT_ARROW){
        WormPositionX = WormPositionX + 4;
      }

      //IMAGE COORDINATES
      RightSideOfWorm = WormPositionX + 80;
      LeftSideOfApple = 600;

      //WORM TOUCHING APPLE
      if (RightSideOfWorm >= LeftSideOfApple){
        wormActive = false;
        score += 1;
        background(196, 220, 255);

        //FUN FACT BOX
        fill(255, 255, 255);
        rect(150, 110, 500, 275, 60);

        //GREAT JOB
        fill(77, 149, 255);
        textSize(40);
        text("Great Job!", 305, 60);

        //FUN FACT HEADING
        textSize(27);
        fill(0);
        text("Fun Fact:", 340, 165);

        //FUN FACT PARAGRAPH
        textSize(20);
        text("Fruit pits from mangos, avocados, peaches,", 200, 225);
        text("plums, etc. can be used in a compost.", 225, 265);

        //CONTINUE BUTTON
        fill(196, 220, 255);
        rect(245, 300, 300, 75, 40);
        fill(0);
        textSize(30);
        text("Continue", 333, 345);
      }
        
        
      //IMAGE COORDINATES
      LeftSideOfWorm = WormPositionX;
      RightSideOfWrapper = 40 +200;

      //WORM TOUCHING WRAPPER
      if (LeftSideOfWorm <= RightSideOfWrapper){
        wormActive = false;
        
        lives -= 1;
          
        background(252, 159, 159);

        //FUN FACT BOX
        fill(255);
        rect(150, 110, 500, 275, 60);

        //NOT QUITE
        fill(255, 28, 28);
        textSize(40);
        text("Not Quite!", 315, 60);

        //FUN FACT HEADING
        fill(0);
        textSize(27);
        text("Fun Fact:", 340, 150);

        //FUN FACT PARAGRAPH
        textSize(17.5);
        text("You should never put plastic items such as food wrappers,", 175, 200);
        text("plastic bags, or plastic water bottles in your", 225, 235);
        text("compost because they take too long to degrade.", 205, 270);

        //CONTINUE BUTTON
        fill(252, 159, 159)
        rect(245, 300, 300, 75, 40);
        fill(0);
        textSize(30);
        text("Continue", 333, 345);
        
      }
    }
  
    else {
      //WAITING FOR USER TO PRESS CONTINUE BUTTON
      if (mouseIsPressed) {
        if (mouseX > 245 && mouseX < 545 && mouseY > 300 && mouseY < 375) {
          gameContext = 1;
          
          if (lives == 0){
          GameOn = false;
          }
          
          initializeWorm();
        }
      }
    }
}


function crackerOrange() {
  
    if (wormActive == true) {
      displayBackground();
      
      //IMAGES
      image(worm, WormPositionX, WormPositionY, 80, 85);
      //image(img, x top L, y top L, width, height)
      image(orange, 600, 145, 150, 155);
      image(cracker, 40, 130, 200, 170);

      //WORM CONTROLS
      if (keyIsPressed && keyCode == LEFT_ARROW){
        WormPositionX = WormPositionX - 4;
      }
      if (keyIsPressed && keyCode == RIGHT_ARROW){
        WormPositionX = WormPositionX + 4;
      }

      //IMAGE COORDINATES
      RightSideOfWorm = WormPositionX + 80;
      LeftSideOfOrange = 600;

      //WORM TOUCHING ORANGE
      if (RightSideOfWorm >= LeftSideOfOrange){
        wormActive = false;
        
        lives -= 1;
        
        background(252, 159, 159);

        //FUN FACT BOX
        fill(255, 255, 255);
        rect(150, 110, 500, 275, 60);

        //NOT QUITE
        fill(255, 28, 28);
        textSize(40);
        text("Not Quite!", 315, 60);

        //FUN FACT HEADING
        fill(0);
        textSize(27);
        text("Fun Fact:", 340, 150);

        //FUN FACT PARAGRAPH
        textSize(17.5);
        text("Acidic foods kill worms so they should most definitely", 193, 200);
        text("not be used in a compost. These include both the insides", 180, 235);
        text("and peels of foods like oranges, lemons, limes, and onions.", 175, 270);
        
        //Acidic foods kill worms so they should most definitely not be used in a compost.
        //These include both the insides and peels of foods like oranges, lemons, limes, and onions.
        
        //CONTINUE BUTTON
        fill(252, 159, 159);
        rect(245, 300, 300, 75, 40);
        fill(0);
        textSize(30);
        text("Continue", 333, 345);
        
      }
        
        
      //IMAGE COORDINATES
      LeftSideOfWorm = WormPositionX;
      RightSideOfCracker = 40 +200;

      //WORM TOUCHING CRACKER
      if (LeftSideOfWorm <= RightSideOfCracker){
        wormActive = false;
        score += 1;
        background(196, 220, 255);

        //FUN FACT BOX
        fill(255, 255, 255);
        rect(150, 110, 500, 300, 60);

        //GREAT JOB
        fill(77, 149, 255);
        textSize(40);
        text("Great Job!", 305, 60);

        //FUN FACT HEADING
        textSize(27);
        fill(0);
        text("Fun Fact:", 340, 165);

        //FUN FACT PARAGRAPH
        textSize(16);
        text("Food items such as bread, crackers, pretzels, cooked pasta, and", 180, 200);
        text("cooked rice can all be put in composts.  However, that can only", 180, 235);
        text("work if they are stale since dry ingredients help balance", 205, 270);
        text("the wet materials like fruits or veggies.", 270, 305);
        
        //Food items such as bread, crackers, pretzels, cooked pasta, and cooked rice can
        //all be put in composts.  However, this can only work if they are stale since dry ingredients can help balance wet materials like fruits or veggies.
        
        //CONTINUE BUTTON
        fill(196, 220, 255)
        rect(245, 325, 300, 75, 40);
        fill(0);
        textSize(30);
        text("Continue", 333, 370);
      }
    }
  
    else {
      //WAITING FOR USER TO PRESS CONTINUE BUTTON
      if (mouseIsPressed) {
        if (mouseX > 245 && mouseX < 545 && mouseY > 300 && mouseY < 375) {
          gameContext = 2;
          
          if (lives == 0){
          GameOn = false;
        }
          
          initializeWorm();
        }
      }
      
      if (mouseIsPressed) {
        if (mouseX > 245 && mouseX < 545 && mouseY > 325 && mouseY < 400) {
          gameContext = 2;
          
          if (lives == 0){
          GameOn = false;
        }
          
          initializeWorm();
        }
      }
      
    }
}


function leavesFries() {
  
  if (wormActive == true) {
      
    displayBackground();
      
      //IMAGES
      image(worm, WormPositionX, WormPositionY, 80, 85);
      //image(img, x top L, y top L, width, height)
      image(fries, 600, 145, 150, 155);
      image(leaves, 40, 130, 200, 170);

      //WORM CONTROLS
      if (keyIsPressed && keyCode == LEFT_ARROW){
        WormPositionX = WormPositionX - 4;
      }
      if (keyIsPressed && keyCode == RIGHT_ARROW){
        WormPositionX = WormPositionX + 4;
      }

      //IMAGE COORDINATES
      RightSideOfWorm = WormPositionX + 80;
      LeftSideOfFries = 600;

      //WORM TOUCHING ORANGE
      if (RightSideOfWorm >= LeftSideOfFries){
        wormActive = false;
        
        lives -= 1;
        
        background(252, 159, 159);

        //FUN FACT BOX
        fill(255, 255, 255);
        rect(150, 110, 500, 260, 60);

        //NOT QUITE
        fill(255, 28, 28);
        textSize(40);
        text("Not Quite!", 315, 60);

        //FUN FACT HEADING
        fill(0);
        textSize(27);
        text("Fun Fact:", 340, 150);

        //FUN FACT PARAGRAPH
        textSize(18);
        text("Greasy foods such as bacon, chips, fries, and", 210, 200);
        text("sausage should never be put in your compost bin.", 195, 235);
        
        //CONTINUE BUTTON
        fill(252, 159, 159);
        rect(245, 280, 300, 75, 40);
        fill(0);
        textSize(30);
        text("Continue", 333, 330);
        
      }
        
        
      //IMAGE COORDINATES
      LeftSideOfWorm = WormPositionX;
      RightSideOfLeaves = 40 +200;

      //WORM TOUCHING CRACKER
      if (LeftSideOfWorm <= RightSideOfLeaves){
        wormActive = false;
        score += 1;
        background(196, 220, 255);

        //FUN FACT BOX
        fill(255, 255, 255);
        rect(150, 110, 500, 335, 60);

        //GREAT JOB
        fill(77, 149, 255);
        textSize(40);
        text("Great Job!", 305, 60);

        //FUN FACT HEADING
        textSize(27);
        fill(0);
        text("Fun Fact:", 340, 165);

        //FUN FACT PARAGRAPH
        textSize(15);
        text("Fallen leaves, pine needles, twings, straw or hay, sawdust, paper,", 185, 200);
        text("and dryer lint are just a few items among a long list of things that are", 180, 235);
        text('called "brown material." "Brown material" is basically dry or woody plant', 166, 270);
        text("based material.  These items are essential to a healthy compost bin in", 176, 305);
        text("that they assist in the overall fast breakdown of your compost.", 200, 340)
        
        // Fallen leaves, pine needles, twings, straw or hay, sawdust, paper, and dryer lint are
        //just a few items among a long list of things that are called “brown material”.
        //“Brown material” is basically dry or woody plant based material.  These items are essential to
        //a healthy compost bin in that they assist in the overall fast breakdown of your compost.
        
        //CONTINUE BUTTON
        fill(196, 220, 255)
        rect(245, 360, 300, 75, 40);
        fill(0);
        textSize(30);
        text("Continue", 333, 410);
      }
    }
  
    else {
      //WAITING FOR USER TO PRESS CONTINUE BUTTON
      if (mouseIsPressed) {
        if (mouseX > 245 && mouseX < 545 && mouseY > 360 && mouseY < 435) {
          gameContext = 3;
          
          if (lives == 0){
          GameOn = false;
          }
          
          initializeWorm();
        }
        if (mouseX > 245 && mouseX < 545 && mouseY > 280 && mouseY < 355) {
          gameContext = 3;
          
          if (lives == 0){
          GameOn = false;
          }
          
          initializeWorm();
        }
      }
    }
}


function meatCoffee() {
  if (wormActive == true) {
      displayBackground();
      
      //IMAGES
      image(worm, WormPositionX, WormPositionY, 80, 85);
      //image(img, x top L, y top L, width, height)
      image(coffee, 600, 180, 150, 115);
      image(meat, 40, 165, 200, 125);

      //WORM CONTROLS
      if (keyIsPressed && keyCode == LEFT_ARROW){
        WormPositionX = WormPositionX - 4;
      }
      if (keyIsPressed && keyCode == RIGHT_ARROW){
        WormPositionX = WormPositionX + 4;
      }

      //IMAGE COORDINATES
      RightSideOfWorm = WormPositionX + 80;
      LeftSideOfCoffee = 600;

      //WORM TOUCHING APPLE
      if (RightSideOfWorm >= LeftSideOfCoffee){
        wormActive = false;
        score += 1;
        background(196, 220, 255);

        //FUN FACT BOX
        fill(255, 255, 255);
        rect(150, 110, 500, 275, 60);

        //GREAT JOB
        fill(77, 149, 255);
        textSize(40);
        text("Great Job!", 305, 60);

        //FUN FACT HEADING
        textSize(27);
        fill(0);
        text("Fun Fact:", 340, 165);

        //FUN FACT PARAGRAPH
        textSize(17);
        text("Tea leaves and coffee grinds are welcome in your compost", 190, 215);
        text("bin, but tea and coffee bags are not. They contain", 220, 250);
        text("synthetic materials that do not easily break down.", 215, 285)

        //CONTINUE BUTTON
        fill(196, 220, 255);
        rect(245, 300, 300, 75, 40);
        fill(0);
        textSize(30);
        text("Continue", 333, 345);
      }
        
        
      //IMAGE COORDINATES
      LeftSideOfWorm = WormPositionX;
      RightSideOfMeat = 40 +200;

      //WORM TOUCHING WRAPPER
      if (LeftSideOfWorm <= RightSideOfMeat){
        wormActive = false;
        
        lives -= 1;
        
        background(252, 159, 159);

        //FUN FACT BOX
        fill(255, 255, 255);
        rect(150, 110, 500, 300, 60);

        //NOT QUITE
        fill(255, 28, 28);
        textSize(40);
        text("Not Quite!", 315, 60);

        //FUN FACT HEADING
        fill(0);
        textSize(27);
        text("Fun Fact:", 340, 150);

        //FUN FACT PARAGRAPH
        textSize(17.5);
        text("You can't put any sort of meat or milk products inside your", 175, 200);
        text("compost bin because they can attract unwanted pests.", 210, 235);
        text("This includes foods like chicken, pork, salmon,", 229, 270);
        text("bacon, milk, cheese, and butter.", 275, 305);

        //CONTINUE BUTTON
        fill(252, 159, 159)
        rect(245, 315, 300, 75, 40);
        fill(0);
        textSize(30);
        text("Continue", 333, 360);
        
      }
    }
  
    else {
      //WAITING FOR USER TO PRESS CONTINUE BUTTON
      if (mouseIsPressed) {
        if (mouseX > 245 && mouseX < 545 && mouseY > 300 && mouseY < 375) {
          gameContext = 4;
          
          if (lives == 0){
          GameOn = false;
          }
          
          initializeWorm();
        }
      }
    }
}


function cartonBottle() {
  if (wormActive == true) {
      displayBackground();
      
      //IMAGES
      image(worm, WormPositionX, WormPositionY, 80, 85);
      //image(img, x top L, y top L, width, height)
      image(bottle, 600, 185, 150, 115);
      image(carton, 40, 175, 200, 125);

      //WORM CONTROLS
      if (keyIsPressed && keyCode == LEFT_ARROW){
        WormPositionX = WormPositionX - 4;
      }
      if (keyIsPressed && keyCode == RIGHT_ARROW){
        WormPositionX = WormPositionX + 4;
      }

      //IMAGE COORDINATES
      RightSideOfWorm = WormPositionX + 80;
      LeftSideOfBottle = 600;

      //WORM TOUCHING APPLE
      if (RightSideOfWorm >= LeftSideOfBottle){
        wormActive = false;
        
        lives -= 1;
        
        background(252, 159, 159);

        //FUN FACT BOX
        fill(255, 255, 255);
        rect(150, 110, 500, 300, 60);

        //NOT QUITE
        fill(255, 28, 28);
        textSize(40);
        text("Not Quite!", 315, 60);

        //FUN FACT HEADING
        fill(0);
        textSize(27);
        text("Fun Fact:", 340, 150);

        //FUN FACT PARAGRAPH
        textSize(17.5);
        text("You should never put plastic items such as food wrappers,", 175, 200);
        text("plastic bags, or plastic water bottles in your", 225, 235);
        text("compost because they take too long to degrade.", 205, 270);

        //CONTINUE BUTTON
        fill(252, 159, 159)
        rect(245, 315, 300, 75, 40);
        fill(0);
        textSize(30);
        text("Continue", 333, 360);
        
      }
        
        
      //IMAGE COORDINATES
      LeftSideOfWorm = WormPositionX;
      RightSideOfCarton = 40 +200;

      //WORM TOUCHING WRAPPER
      if (LeftSideOfWorm <= RightSideOfCarton){
        wormActive = false;
        score += 1;
        background(196, 220, 255);

        //FUN FACT BOX
        fill(255, 255, 255);
        rect(150, 110, 500, 300, 60);

        //GREAT JOB
        fill(77, 149, 255);
        textSize(40);
        text("Great Job!", 305, 60);

        //FUN FACT HEADING
        textSize(27);
        fill(0);
        text("Fun Fact:", 340, 165);

        //FUN FACT PARAGRAPH
        textSize(15);
        text("You may add paper egg cartons to your compost, but take off the", 180, 200);
        text("label before doing so. This is because glossy paper contains plastic and wax,", 180, 235);
        text("which take a very long time to degrade and", 220, 270);
        text("include harmful toxins.", 320, 305)

        //CONTINUE BUTTON
        fill(196, 220, 255);
        rect(245, 315, 300, 75, 40);
        fill(0);
        textSize(30);
        text("Continue", 333, 360);
      }
    }
  
    else {
      //WAITING FOR USER TO PRESS CONTINUE BUTTON
      if (mouseIsPressed) {
        if (mouseX > 245 && mouseX < 545 && mouseY > 300 && mouseY < 375) {
          gameContext = 5;
          
          if (lives == 0){
          GameOn = false;
        }
          
          initializeWorm();
        }
      }
    }
}


function eggshellButter() {
  
  if (wormActive == true) {
      displayBackground();
      
      //IMAGES
      image(worm, WormPositionX, WormPositionY, 80, 85);
      //image(img, x top L, y top L, width, height)
      image(eggshell, 600, 140, 170, 155);
      image(butter, 40, 150, 205, 140);

      //WORM CONTROLS
      if (keyIsPressed && keyCode == LEFT_ARROW){
        WormPositionX = WormPositionX - 4;
      }
      if (keyIsPressed && keyCode == RIGHT_ARROW){
        WormPositionX = WormPositionX + 4;
      }

      //IMAGE COORDINATES
      RightSideOfWorm = WormPositionX + 80;
      LeftSideOfEggshell = 600;

      //WORM TOUCHING APPLE
      if (RightSideOfWorm >= LeftSideOfEggshell){
        wormActive = false;
        score += 1;
        background(196, 220, 255);

        //FUN FACT BOX
        fill(255, 255, 255);
        rect(150, 110, 500, 275, 60);

        //GREAT JOB
        fill(77, 149, 255);
        textSize(40);
        text("Great Job!", 305, 60);

        //FUN FACT HEADING
        textSize(27);
        fill(0);
        text("Fun Fact:", 340, 165);

        //FUN FACT PARAGRAPH
        textSize(17.5);
        text("Eggshells can be added into composts! This is because they", 170, 210);
        text("include a high amount of calcium which assists the", 215, 245);
        text("overall fast breakdown of the compost.", 250, 280)

        //CONTINUE BUTTON
        fill(196, 220, 255);
        rect(245, 300, 300, 75, 40);
        fill(0);
        textSize(30);
        text("Continue", 333, 345);
      }
        
        
      //IMAGE COORDINATES
      LeftSideOfWorm = WormPositionX;
      RightSideOfButter = 40 +200;

      //WORM TOUCHING WRAPPER
      if (LeftSideOfWorm <= RightSideOfButter){
        wormActive = false;
        
        lives -= 1;
        
        background(252, 159, 159);

        //FUN FACT BOX
        fill(255, 255, 255);
        rect(150, 110, 500, 300, 60);

        //NOT QUITE
        fill(255, 28, 28);
        textSize(40);
        text("Not Quite!", 315, 60);

        //FUN FACT HEADING
        fill(0);
        textSize(27);
        text("Fun Fact:", 340, 150);

        //FUN FACT PARAGRAPH
        textSize(17.5);
        text("You can't put any sort of meat or milk products inside your", 175, 200);
        text("compost bin because they can attract unwanted pests.", 210, 235);
        text("This includes foods like chicken, pork, salmon,", 229, 270);
        text("bacon, milk, cheese, and butter.", 275, 305);

        //CONTINUE BUTTON
        fill(252, 159, 159)
        rect(245, 315, 300, 75, 40);
        fill(0);
        textSize(30);
        text("Continue", 333, 360);
        
      }
    }
  
    else {
      //WAITING FOR USER TO PRESS CONTINUE BUTTON
      if (mouseIsPressed) {
        if (mouseX > 245 && mouseX < 545 && mouseY > 300 && mouseY < 375) {
          GameOn = false;
        }
      }
    }
}
