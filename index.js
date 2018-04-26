function toRomanNumerals(number) {
    if (typeof(number) != 'number' || Math.round(number) != number || number < 0) {
    	return "";
    }

    var digit = [1, 5, 10, 50, 100, 500, 1000]
    var roman = ["I", "V", "X", "L", "C", "D", "M"]

    for (var i = 0; i < digit.length; i++) {
    	if (digit[i] == number) {
    		var letter = roman[i];
    	}
    }

    return letter;
}

module.exports = {
    toRomanNumerals
}