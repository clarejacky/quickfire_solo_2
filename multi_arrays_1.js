var array1 = [1,2,3,4,5,6,7,8];
var array2 = [2,3,4,5,6,7,8,9];
var array3 = [3,4,5,6,7,8,9,1];
var array4 = [4,5,6,7,8,9,1,2];
var array5 = [5,6,7,8,9,1,2,3];
var array6 = [6,7,8,9,1,2,3,4];

var masterArray = [];
masterArray.push(array1);
masterArray.push(array2);
masterArray.push(array3);
masterArray.push(array4);
masterArray.push(array5);
masterArray.push(array6);

console.log (masterArray);

var multiArray = function(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array[i].length; j++) {
			array[i][j] = plusOne(array[i][j]);
			array[i][j] = timesTwo(array[i][j]);
		}
		console.log(array[i]);
	}
	return;
}

multiArray(masterArray);

function plusOne(val) {
	val +=1;
	return val;
}
function timesTwo(val) {
	val = val * 2;
	return val;
}

