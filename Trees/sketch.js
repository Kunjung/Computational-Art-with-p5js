var slider;
var angle = PI/4;

function setup() {
  createCanvas(600, 500);
  createP('');
  slider = createSlider(0, TWO_PI, PI/4, 0.001);

}

function draw() {

  angle = slider.value();

  background(0);
  stroke(255);
  translate(width/2, height)
  branch(150);

}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();

    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
