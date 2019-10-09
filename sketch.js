var bubble = [];


function setup() {
  createCanvas(windowWidth,windowHeight);
  background('aquamarine');
  ellipseMode(RADIUS);
  noStroke();

  for(var i = 0; i < 33; i++){
    var x = random(width);
    var y = random(height);
    var r = i + 2;
    bubble[i] = new Bubble(x,y,r);
  }
}

function draw() {
  background('aquamarine');
  push();
  for(var i = 0; i < bubble.length; i++){
    bubble[i].move();
    bubble[i].display();
    pop();


    // eye1
    push();
    fill(255);
    ellipse((windowWidth / 2) - 110, windowHeight / 2, 100, 100);
    pop();
    // axis1
    push();
    translate((width / 2) - 110, height / 2);
    let a1 = atan2(mouseY - height / 2, mouseX - width / 2);
    rotate(a1);
    fill(0);
    ellipse(30, 5, 35, 35);
    pop();

    // eye2
    push();
    fill(255);
    ellipse((windowWidth / 2) + 110, windowHeight / 2, 100, 100);
    pop();
    // axis2
    push();
    translate((width / 2) + 110, height / 2);
    let a2 = atan2(mouseY - height / 2, mouseX - width / 2);
    rotate(a2);
    fill(0);
    ellipse(30, 5, 35, 35);
    pop();
    // I know there's a way to do this shorter, but it didn't work :(

    push();
    if (mouseIsPressed == true) {
      noFill();
      stroke(255);
      ellipse(0, 0, 70, 70);

    } else {
      noStroke();
      fill('aquamarine');
      rect(0, 0, windowWidth, windowHeight / 2);
      pop();
    }

    fill(0, 237, 229);
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);

  }
}

function Bubble(_x,_y,_r) {
  this.x = _x;
  this.y = _y;
  this.r = _r;
  this.speed = 5;


  this.move = function() {
    this.x += random(-this.speed,this.speed);
    this.y += random(-this.speed,this.speed);
  };

  this.display = function() {
    fill(random(50,255));
    noStroke();
    ellipse(this.x,this.y,this.r/2);
  };
}
