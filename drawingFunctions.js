

function drawDot(){
	$('canvas').drawArc({
  		strokeStyle: this.color,
  		strokeWidth: 10,
  		x: this.x, y: this.y,
  		radius: 5
	});

}