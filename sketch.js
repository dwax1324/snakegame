var s;
var scl = 20;
var isDead = false;
var scr=  'score';
var food;
function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(16);
  pickLocation();

}




function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
 food.mult(scl);                      
}





function draw() {
  background(40, 40, 40);
  textFont('cursive');
  textSize(16);
  fill(255);
  text('score',550,20);
  text(score,570,40);
  s.death();
  s.update();
  s.show();
  fill(255,0,0);
  rect(food.x,food.y,scl,scl);
  
  console.log(isDead);
  if(isDead){
     textSize(16);
  fill(255);
  text('Game Over',260,270); 
  text('Press space to restart',220,300);
    
  }
  
  if(s.eat(food)){
    pickLocation();
    
  }
}
  var isUp = false;
  var isDown =false;
  var isRight = false;
  var isLeft = false;

function keyPressed(){
  

  if(keyCode === UP_ARROW){
    if(isDown) return
    s.dir(0,-1);
    isUp = true;
    isDown = false;
    isRight = false;
    isLeft = false;
  }else if(keyCode === DOWN_ARROW){
    if(isUp) return
    s.dir(0,1);
    isUp = false;
    isDown = true;
    isRight = false;
    isLeft = false;
  }else if(keyCode === RIGHT_ARROW){
    if(isLeft) return
    s.dir(1,0);
    isUp = false;
    isDown = false;
    isRight = true;
    isLeft = false;
    
  }else if(keyCode === LEFT_ARROW){
    if(isRight)return
    s.dir(-1,0);
    isUp = false;
    isDown = false;
    isRight = false;
    isLeft = true;
  }
  
}