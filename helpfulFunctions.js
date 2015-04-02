


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



function findMostDistant(arrayOfOtherObjects){
var indexOfMostDistant = -1;
var maxDistance = 0;
var thisObject = this;
arrayOfOtherObjects.forEachItem(function(array,i){
 var distance = findDistance(thisObject,array[i]);
 if (distance>maxDistance){
 	maxDistance = distance;
 	indexOfMostDistant = i;
 }
 
});
return indexOfMostDistant;
}


function generateRandomPossibleStepsWithNumberAndRadius(number,radius){
	var possibleSteps = [];
		for (var i = 0;i<number;i++){
			var possiblePoint = this.randomDisplacementWithRadius(radius);
			possibleSteps.push(possiblePoint);
		}
	return possibleSteps;
}


function randomDisplacementWithRadius(radius){
	var x = this.x + getRandomArbitrary(-Math.abs(radius), Math.abs(radius));
	var y = this.y + getRandomArbitrary(-Math.abs(radius), Math.abs(radius));
	if (!bodyIsWithinBoundaries(x,10,500)) x = this.x;
	if (!bodyIsWithinBoundaries(y,10,500)) y = this.y;

	var nextStepPoint = new Point(x,y);
	return nextStepPoint;
}


function findClosest(arrayOfOtherObjects){
	var indexOfClosest = -1;
	var minDistance = 1000000;
	var thisObject = this;
	arrayOfOtherObjects.forEachItem(function(array,i){
		var distance = findDistance(thisObject,array[i]);
		if (distance<minDistance){
			minDistance = distance;
			indexOfClosest = i;
		 }
 
	});
	return indexOfClosest;
}