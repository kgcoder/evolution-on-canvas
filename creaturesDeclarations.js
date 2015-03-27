function Dot(x,y,color){
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
if (nextX>0+10&&nextX<500-10)this.nextX = nextX;
if (nextY>0+10&&nextY<500-10)this.nextY = nextY;
}


this.move = function(){
this.previousX=this.x;
this.previousY=this.y;
this.x=this.nextX;
this.y=this.nextY;
}


this.draw = function(){
$('canvas').drawArc({
  strokeStyle: this.color,
  strokeWidth: 10,
  x: this.x, y: this.y,
  radius: 5
});


}


};


