function toRomanNumerals(number) {
    var letters = ""

    if (typeof(number) != 'number' || Math.round(number) != number || number < 0) {
    	return letters
    }

    var digit = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    for (var i = 0; i < digit.length; i++) {
    	while (number >= digit[i]) {
    		letters += roman[i]
    		number -= digit[i]
    	}
    	if (number == 0) {
    		break
    	}
    }

    return letters
}

function toDigitNumber(str)  {
    if (!str) {
    	return -1
    }

    if (/^[MDCLXVImdclxvi]+$/.test(str) == false) {
    	return -1
    }

    str = str.toUpperCase()

    var number = 0
    var numRemove = 0
	var digit = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

	for (var i = 0; i < roman.length; i++) {
		while (str.startsWith(roman[i])) {
			number = number + digit[i]
			numRemove = roman[i].length
			str = str.substr(numRemove)
		}
	}

	return number;
}

module.exports = {
    toRomanNumerals, toDigitNumber
}