

function mainLoop(){
$('canvas').drawRect({
  fillStyle: '#000',
  x: 250, y: 250,
  width: 500,
  height: 500
});

calculateNextStepForCreatures(blueDots);
calculateNextStepForCreatures(redDots);



moveAndDrawCreatures(blueDots);
moveAndDrawCreatures(redDots);



};

function moveAndDrawCreatures(creaturesArray){
for (var i=0;i<creaturesArray.length;i++){

creaturesArray[i].move();
creaturesArray[i].draw();


}
}
function calculateNextStepForCreatures(creaturesArray){
for (var i=0;i<creaturesArray.length;i++){

creaturesArray[i].calculateNextStep();



}
}
