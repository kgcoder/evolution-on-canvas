

function mainLoop(){
$('canvas').drawRect({
  fillStyle: '#000',
  x: 250, y: 250,
  width: 500,
  height: 500
});

//check deaths
doInLoop(blueDots,checkIfBlueDotsAreEatenByRedDots);

//calculate next step
doInLoop(blueDots,calculateNextStep);
doInLoop(redDots,calculateNextStep);


//do next step and draw everybody
doInLoop(blueDots,moveAndDraw);
doInLoop(redDots,moveAndDraw);


};

function checkIfBlueDotsAreEatenByRedDots(array,i){

	var indexOfClosest = findClosest(array[i],redDots);
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
  

  
