/* global createCanvas, background, noStroke, fill, rect, width, loadImage, image, ellipse, textSize, text, frameRate, mouseIsPressed, mouseX,
mouseY, triangle, loadSound, soundFormats */


var score, GameOn, timer, seconds, correct, wrong, GameContext;
var beach, recyclingbin, trashbin;
var toiletroll, starbuckscup, eggcarton, tissuebox, cardboard, paper, magazine, newspaper, can, sodabottle, 
milk, pb, yogurt, waterbottle, ketchup, jelly, tinfoil;
var hanger, bag, styrofoam, plate, cord, toy, shirt, straw, toiletpaper, bubblewrap, pizza;
var GAME_TIME;
var recyclables = [];
var recyclableindex;
var trash = [];
var trashindex;
var NaturalPause;
var coinflip;
let mySound;


function preload() {
  //soundFormats('mp3', 'ogg');
  mySound = loadSound('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fpositive_tone.mp3?v=1596656664574');
  
}


function setup() {
  createCanvas(800, 500);
  frameRate(75);
  
  beach = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FBeach%20Clipart2.jpg?v=1595548868350');
  recyclingbin = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FRecycling%20Bin.png?v=1595548661507');
  trashbin = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FTrash%20Can.png?v=1595549282728')
  
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage0.png?v=1596325579299'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FYogurt.png?v=1596743307434'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage2.png?v=1596325564628'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage3.png?v=1596325543148'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage4.png?v=1596325532025'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage5.png?v=1596330832394'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FWater.png?v=1596743332852'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage7.png?v=1596325498313'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage8.png?v=1596325489507'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FStarbucks.png?v=1596743353837'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage10.png?v=1596325464887'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FSoda.png?v=1596743371269'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FPB.png?v=1596743389127'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FMagazine.png?v=1596743404463'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FKetchup.png?v=1596743423696'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage0.png?v=1596331392814'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage0%20(3).png?v=1596330901839'));
  recyclables.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FJam.png?v=1596743439635'));
  
  trash.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FHanger.png?v=1596743451825'));
  trash.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage8%20(1).png?v=1596329428902'));
  trash.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage7%20(1).png?v=1596329493729'));
  trash.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage6%20(1).png?v=1596329518040'));
  trash.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage5%20(1).png?v=1596329539937'));
  trash.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage4%20(1).png?v=1596329567288'));
  trash.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage3%20(1).png?v=1596329595440'));
  trash.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage1%20(1).png?v=1596329641981'));
  trash.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage0%20(2).png?v=1596329667547'));
  trash.push(loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2Fimage0.png?v=1596393313792'));

  
  GAME_TIME = 60;
  resetGame();
  
}

function resetGame() {
  score = 0;
  GameOn = false;
  seconds = GAME_TIME;
  correct = 0;
  wrong = 0;
  GameContext = 0;
  NaturalPause = 0;
}


function draw() {
  
  displayBackground();
  
  if(GameOn == true){
    runGame();
  }
  else{
  }
}


function displayBackground() {
  //BACKGROUND
  image(beach, 0, 0, 800, 550);
  //image(imgname, x top L, y top L, width, height)
  image(recyclingbin, 100, 360, 150, 135);
  image(trashbin, 600, 310, 130, 180);
  
  //SCORE
  noStroke();
  fill(255);
  rect(575, 15, 200, 60, 60);
  //rect(x top L, y top L, width, height)
  fill(0);
  textSize(32);
  text("Score: " + score, 620, 55);
  
  //TIMER
  if(seconds < GAME_TIME) {
    fill(255);
    rect(35, 20, 75, 45, 60);
    fill(0);
    textSize(32);
    text(seconds, 55, 55)
  }
  
  //GAME OVER
  if(seconds == 0) {
    fill(255);
    rect(150, 100, 500, 290, 60);
    fill(0);
    textSize(35);
    text("Nice Job!", 330, 160)
    textSize(25);
    text("Correct:" + correct, 350, 220)
    text("Wrong:" + wrong, 355, 260)
    fill(94, 230, 235);
    rect(250, 290, 300, 75, 40);
    fill(0);
    textSize(33);
    text("Restart", 345, 336);
    GameOn = false;
    
    if (mouseIsPressed) {
        if (mouseX > 250 && mouseX < 550 && mouseY > 290 && mouseY < 365) {
          resetGame();
        }
    }
  }
  
  //PLAY BUTTON
  if(GameOn == false && seconds == GAME_TIME) {
    fill(255);
    ellipse(400, 225, 150);
    //ellipse(x middle, y middle, diameter horizontal, diameter, vertical)
    
    fill(0);
    triangle(370, 185, 370, 265, 450, 225);
    //triangle(x1, y1, x2, y2, x3, y3)
    
    if (mouseIsPressed) {
        if (mouseX > 325 && mouseX < 475 && mouseY > 150 && mouseY < 300) {
          GameOn = true;
          
          //TIMER
          //if(!timer) {
            timer = window.setInterval(function() {
              myTimer();
            }, 1000);
          //}
        }
    }
  }
}


function runGame() {
  //displayBackground();
  
  if(GameContext == 0){
    coinflip = Math.floor(Math.random() * 2);
    if(coinflip == 0){
      recyclableindex = Math.floor(Math.random() * recyclables.length);
      image(recyclables[recyclableindex], 300, 200, 170, 165);
    }
    else{
      trashindex = Math.floor(Math.random() * trash.length);
      image(trash[trashindex], 300, 200, 160, 120);
    }
    GameContext = 1;
  }
  if(GameContext == 1){
    if(coinflip == 0){
      image(recyclables[recyclableindex], 300, 200, 170, 165);
    }
    else{
      image(trash[trashindex], 300, 200, 160, 120);
    }
    if (mouseIsPressed) {
        //RECYCLE BIN
        if (mouseX > 100 && mouseX < 250 && mouseY > 360 && mouseY < 495) {
          if(coinflip == 0){
            score ++;
            correct ++;
            //mySound.play();
          }
          else{
            score --;
            wrong ++;
          }
          GameContext = 2;
          NaturalPause = 10;
        }
        //TRASH CAN
        if (mouseX > 600 && mouseX < 730 && mouseY > 310 && mouseY < 490) {
          if(coinflip == 0){
            score --;
            wrong ++;  
          }
          else{
            score ++;
            correct ++;
            //mySound.play();
          }
          GameContext = 2;
          NaturalPause = 10;
        }
    }
  }
  if(GameContext == 2){
    if(NaturalPause > 0){
      NaturalPause --;
    }
    else{
      GameContext = 0;
    }
  }
}


function myTimer() {
  /*if(seconds < 60) {
    document.getElementById("timer").innerHTML = seconds;
  }*/
  if (seconds > 0 ) {
    seconds--;
  }
  else {
    clearInterval(timer);
    GameOn = false;
  }
}  




/*<script src="https://cdnjs.cloudflare.com/ajax/libs/SoundJS/1.0.2/soundjs.min.js"></script>*/
