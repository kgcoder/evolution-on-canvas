





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
this.numberOfPossibleSteps = 3;
this.calculateNextStep = nextStepBlueDot;
}else{
this.run = "chase";
this.numberOfPossibleSteps = 10;
this.calculateNextStep = nextStepRedDot;
}


this.move = function(){
	this.previousStepPoint = new Point(this.x,this.y);
	this.x = this.nextStepPoint.x;
	this.y = this.nextStepPoint.y;

}


this.draw = drawDot;


}







function nextStepBlueDot(){
	var arrayOfCounterparts = redDots;
	
	this.nextStepPoint = this.randomDisplacementWithRadius(10);
	
	if (arrayOfCounterparts.length>0){
		var closestPredator = arrayOfCounterparts[this.findClosest(arrayOfCounterparts)];
		var distance = findDistance(this,closestPredator);

		if (distance<50){
			this.nextStepPoint = nextStepForObjectFleeOrChase(this,"runs away from",closestPredator);
		}

	}
}


function nextStepRedDot(){
	var arrayOfCounterparts = blueDots;
	this.nextStepPoint = this.randomDisplacementWithRadius(10);
	if (arrayOfCounterparts.length>0){
		
		var closestTarget = arrayOfCounterparts[this.findClosest(arrayOfCounterparts)];
		this.nextStepPoint = nextStepForObjectFleeOrChase(this,"chases",closestTarget);
		
	}
}


function nextStepForObjectFleeOrChase(obj,fleeOrChase,counterPartObj){
	var possibleSteps = obj.generateRandomPossibleStepsWithNumberAndRadius(obj.numberOfPossibleSteps,10);
	var indexOfNextStepPoint;
	
	switch (fleeOrChase){
	case "runs away from":
		indexOfNextStepPoint = counterPartObj.findMostDistant(possibleSteps);
		break;
	case "chases":
		indexOfNextStepPoint = counterPartObj.findClosest(possibleSteps);
		break;
	
	}
	
	
	return possibleSteps[indexOfNextStepPoint];
}





Dot.prototype.generateRandomPossibleStepsWithNumberAndRadius = generateRandomPossibleStepsWithNumberAndRadius;
Dot.prototype.randomDisplacementWithRadius = randomDisplacementWithRadius;
Dot.prototype.findClosest = findClosest;
Dot.prototype.findMostDistant = findMostDistant;
