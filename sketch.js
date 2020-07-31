var s;
var scl = 20;
var isDead = false;
var scr=  'score';
var food;
let preventMultupleKeys = 10;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(17);
  pickLocation();
}




function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
 food.mult(scl);       
                
}



let asd = false;

function draw() {
  timer();
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
  
  if(isDead){
     textSize(16);
  fill(255);
  text('Game Over',260,270); 
    text('Press space to restart', 220, 300);
    
  }
  
  if(s.eat(food)){
    pickLocation();
    
  }
}
  function timer() {
  if(asd) preventMultupleKeys++;

  }


function keyPressed() {
  asd = true;
  if (preventMultupleKeys < 1) return;
  else {
    preventMultupleKeys = 0;
  }

  if (s.xspeed === 1 && s.yspeed == 0 && keyCode == LEFT_ARROW) return;
  else if (s.xspeed === -1  && s.yspeed == 0 && keyCode == RIGHT_ARROW) return;
  else if (s.xspeed === 0  && s.yspeed == 1 && keyCode == UP_ARROW) return;
  else if (s.xspeed === 0  && s.yspeed == -1 && keyCode == DOWN_ARROW) return;

  
  if (keyCode === UP_ARROW  ) {
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW  ) {
    s.dir(0,1);
  } else if (keyCode === RIGHT_ARROW  ) {
    s.dir(1,0);    
  } else if (keyCode === LEFT_ARROW  ) {
    s.dir(-1,0);
  }
  
}