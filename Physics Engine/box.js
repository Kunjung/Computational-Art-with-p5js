function Box(x, y, w, h) {

	options = {
		friction: 0.8,
		restitution: 0.6
	}
	this.body = Bodies.rectangle(x, y, w, h, options);
	World.add(world, this.body);
	this.w = w;
	this.h = h;

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;

		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		strokeWeight(1);
		stroke(200);
		fill(200);
		rect(0, 0, this.w, this.h);
		pop();

	}
}