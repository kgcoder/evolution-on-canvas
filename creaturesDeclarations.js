function Dot(x,y,color){

this.dead=false;
this.x=x;
this.y=y;
this.previousX=x;
this.previousY=y;
this.color = color;
this.nextX=x;
this.nextY=y;
this.calculateNextStep = function(){
var nextX = this.x + getRandomArbitrary(-10, 10);
var nextY = this.y + getRandomArbitrary(-10, 10);
if (bodyIsWithinBoundaries(nextX,10,500))this.nextX = nextX;
if (bodyIsWithinBoundaries(nextY,10,500))this.nextY = nextY;
}


this.move = function(){
this.previousX=this.x;
this.previousY=this.y;
this.x=this.nextX;
this.y=this.nextY;
}


this.draw = drawDot;


}





function bodyIsWithinBoundaries(coordinate,radius,dimentionOfCanvas){
	return coordinate>radius&&coordinate<dimentionOfCanvas-radius
}


