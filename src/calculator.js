function add(numbers) {
	if (numbers == "") {
		return 0;
	}
	if (numbers.includes(",")) {
		var ret = 0;
		var numberArr = numbers.split(/[\n,]/);
		for (var i = 0; i < numberArr.length; i++) {
			if (numberArr[i] !== undefined) {
				ret += parseInt(numberArr[i]);
			}
			
		}
		return ret;
	}
	return parseInt(numbers);
}

module.exports = add;