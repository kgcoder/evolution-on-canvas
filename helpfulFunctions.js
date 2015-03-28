
function doInLoop(array,whatToDo){
for (var i=0;i<array.length;i++){
 whatToDo(array,i);
}
}


function findDistance(object1,object2){
	return Math.sqrt(Math.pow((object1.x-object2.x),2)+Math.pow((object1.y-object2.y),2));
}


function findClosest(object,arrayOfOtherObjects){
var indexOfClosest = -1;
var minDistance = 1000000;
doInLoop(arrayOfOtherObjects, function(array,i){
 var distance = findDistance(object,array[i]);
 if (distance<minDistance){
 	minDistance = distance;
 	indexOfClosest = i;
 }
 
});
return indexOfClosest;
}