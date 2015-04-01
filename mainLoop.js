

function mainLoop(){
$('canvas').drawRect({
  fillStyle: '#000',
  x: 250, y: 250,
  width: 500,
  height: 500
});

//check deaths
blueDots.forEachItem(checkIfBlueDotsAreEatenByRedDots);

//calculate next step
blueDots.forEachItem(calculateNextStep);
redDots.forEachItem(calculateNextStep);


//do next step and draw everybody
blueDots.forEachItem(moveAndDraw);
redDots.forEachItem(moveAndDraw);


};

function checkIfBlueDotsAreEatenByRedDots(array,i){
    
	var indexOfClosest = array[i].findClosest(redDots);
	var distance = findDistance(array[i],redDots[indexOfClosest]);
	if (distance<10) array.splice(i,1);

}





function moveAndDraw(array,i){
  array[i].move();
  array[i].draw();
  }
  
function calculateNextStep(array,i){
  array[i].calculateNextStep();
  }
  

  
