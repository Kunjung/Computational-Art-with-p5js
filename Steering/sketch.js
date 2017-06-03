var font;
var vehicles = [];

function preload() {
    font = loadFont('AvenirNextLTPro-Demi.otf');
}
function setup() {
    createCanvas(700, 400);
    background(51);
    textFont(font);
    textSize(390);
    fill(255);
    noStroke()
    //text('train', 200, 150);
    var number = floor(Math.random()*48);
    while (number == 18) {
        number = floor(Math.random()*48);
    }
    var text = '' + number;
    
    var points = font.textToPoints(text, 70, height/2 + 100, 390, {sampleFactor: 0.3});
    //var points = font.textToPoints('train', 200, 150, 192);
    
    for (var i = 0; i < points.length; i++) {
        var pt = points[i];

        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);

        // stroke(0, 255, 0);
        // strokeWeight(4);
        // point(pt.x, pt.y);
    }

}

function draw() {
    background(51);
    //text('train', 200, 150);
    
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.update();
        v.show();
        v.behaviors();
    }
}