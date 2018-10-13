function add(numbers) {
	if (numbers == "") {
		return 0;
	}
	if (numbers.includes(",")) {
		var ret = 0;
		var numberArr = numbers.split(",");
		for (var i = 0; i < numberArr.length; i++) {
			ret += parseInt(numberArr[i]);
		}
		return ret;
	}
	return parseInt(numbers);
}

module.exports = add;