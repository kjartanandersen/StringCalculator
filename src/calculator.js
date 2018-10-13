function add(numbers) {
	if (numbers == "") {
		return 0;
	}
	if (numbers.includes(",")) {
		var ret = 0;
		var numberArr = numbers.split(/[\n,]/);
		var isNegative = false;
		var msg = "Negatives not allowed: ";
		for (var i = 0; i < numberArr.length; i++) {
			if (numberArr[i] < 0) {
				msg += numberArr[i] + ",";
				isNegative = true;
			}
			if (numberArr[i] != undefined && isNegative == false) {
				ret += parseInt(numberArr[i]);
			}
			
		}
		if (isNegative == false) {
			return ret;
		}
		msg = msg.slice(0, -1);
		throw msg;
	}
	return parseInt(numbers);
}

module.exports = add;