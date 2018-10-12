function add(numbers) {
	if (numbers == "") {
		return 0;
	}
	if (numbers.includes(",")) {
		var numberArr = numbers.split(",");
		return parseInt(numberArr[0]) + parseInt(numberArr[1]);
	}
	return parseInt(numbers);
}

module.exports = add;