function add(numbers) {
	if (numbers == "") {
		return 0;
	}
	var del;
	var isCustomDel = false;
	if (numbers.substring(0,2) == "//") {
		del = [numbers[2]];
		isCustomDel = true;
	}
	else {
		del = [","];
	}
	if (numbers.includes(del[0])) {
		del.push("\n");
		var ret = 0;
		if (isCustomDel) {
			numbers = numbers.substring(4,numbers.length);
		}
		var numberArr = numbers.split(new RegExp(del.join('|'), 'g'));
		var isNegative = false;
		var msg = "Negatives not allowed: ";
		for (var i = 0; i < numberArr.length; i++) {
			if (numberArr[i] <= 1000) {
				if (numberArr[i] < 0) {
				msg += numberArr[i] + ",";
				isNegative = true;
				}
				if (numberArr[i] != undefined && isNegative == false) {
				ret += parseInt(numberArr[i]);
				}
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