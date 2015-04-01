function Dot(x,y,color){

this.x=x;
this.y=y;

this.color = color;

this.previousStepPoint = 
this.nextStepPoint = new Point(x,y);
//this.calculateNextStep = nextStepDotFleeOrChase;
//this.arrayOfCounterparts = arrayOfCounterparts;

if (color == "blue"){
this.run = "flee";
this.calculateNextStep = nextStepBlueDot;
}else{
this.run = "chase";
this.calculateNextStep = nextStepBlueDot;
}


this.move = function(){
	this.previousStepPoint = new Point(this.x,this.y);
	this.x = this.nextStepPoint.x;
	this.y = this.nextStepPoint.y;

}


this.draw = drawDot;


}


/*
function nextStepDotFleeOrChase(){
	this.nextStepPoint = this.randomDisplacementWithRadius(10);
	if (this.arrayOfCounterparts.length>0){
		var indexOfClosest = this.findClosest(this.arrayOfCounterparts);
		var distance = findDistance(this,this.arrayOfCounterparts[indexOfClosest]);
		if (distance<50){
			var possibleSteps = [];
			var indexOfNextStepPoint = 0;
			for (var i = 0;i<10;i++){
				var possiblePoint = this.randomDisplacementWithRadius(10);
				possibleSteps.push(possiblePoint);
			}
		
		    if (this.run == "flee"){
		   		indexOfNextStepPoint = this.arrayOfCounterparts[indexOfClosest].findMostDistant(possibleSteps);
		    else if (this.run == "chase"){
				indexOfNextStepPoint = this.arrayOfCounterparts[indexOfClosest].findClosest(possibleSteps);
		   }
		}
		
			this.nextStepPoint = possibleSteps[indexOfNextStepPoint];
		

	}
    }
}
*/




function nextStepBlueDot(){
	this.nextStepPoint = this.randomDisplacementWithRadius(10);
	if (redDots.length>0){
		var indexOfClosestPredator = this.findClosest(redDots);
		var distance = findDistance(this,redDots[indexOfClosestPredator]);

		if (distance<50){
			var possibleSteps = [];
			for (var i = 0;i<10;i++){
				var possiblePoint = this.randomDisplacementWithRadius(10);
				possibleSteps.push(possiblePoint);
			}

			var indexOfNextStepPoint = redDots[indexOfClosestPredator].findMostDistant(possibleSteps);

			this.nextStepPoint = possibleSteps[indexOfNextStepPoint];
		}

	}
}


function nextStepRedDot(){
	this.nextStepPoint = this.randomDisplacementWithRadius(10);
	if (blueDots.length>0){
		var indexOfTarget = this.findClosest(blueDots);
		var possibleSteps = [];
		for (var i = 0;i<10;i++){
			var possiblePoint = this.randomDisplacementWithRadius(10);
			possibleSteps.push(possiblePoint);
		}

		var indexOfNextStepPoint = blueDots[indexOfTarget].findClosest(possibleSteps);
		this.nextStepPoint = possibleSteps[indexOfNextStepPoint];
	}
}


Dot.prototype.randomDisplacementWithRadius = function(radius){
	var x = this.x + getRandomArbitrary(-Math.abs(radius), Math.abs(radius));
	var y = this.y + getRandomArbitrary(-Math.abs(radius), Math.abs(radius));
	if (!bodyIsWithinBoundaries(x,10,500)) x = this.x;
	if (!bodyIsWithinBoundaries(y,10,500)) y = this.y;

	var nextStepPoint = new Point(x,y);
	return nextStepPoint;
}


Dot.prototype.findClosest = function(arrayOfOtherObjects){
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

Dot.prototype.findMostDistant = function(arrayOfOtherObjects){
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

