


Array.prototype.forEachItem = function (whatToDo){
for (var i=0;i<this.length;i++){
 whatToDo(this,i);
}
}


function Point(x,y){
this.x = x;
this.y = y;
}

function findDistance(object1,object2){
    
	return Math.sqrt(Math.pow((object1.x-object2.x),2)+Math.pow((object1.y-object2.y),2));
}

function bodyIsWithinBoundaries(coordinate,radius,dimentionOfCanvas){
	return coordinate>radius&&coordinate<dimentionOfCanvas-radius
}