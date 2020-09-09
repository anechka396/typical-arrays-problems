
exports.min = function min (array) {
	if(array == null || array.length == 0)
		return 0;
	var min_value = array[0];
	for(var i = 1; i < array.length; i++) {
		if(min_value > array[i]) {
			min_value = array[i];
		}
	}
	return min_value;
}

exports.max = function max (array) {
	if(array == null || array.length == 0)
		return 0;
	var max_value = array[0];
	for(var i = 1; i < array.length; i++) {
		if(max_value < array[i]) {
			max_value = array[i];
		}
	}
	return max_value;
}

exports.avg = function avg (array) {
	if(array == null || array.length == 0)
		return 0;
	var sum = 0;
	for(var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum / array.length;
}
