function toRomanNumerals(number) {
    var letters = ""

    if (typeof(number) != 'number' || Math.round(number) != number || number < 0) {
    	return letters
    }

    var digit = [1000, 500, 100, 50, 10, 5, 1]
    var roman = ["M", "D", "C", "L", "X", "V", "I"]

    for (var i = 0; i < digit.length; i++) {
    	while (number >= digit[i]) {
    		letters += roman[i]
    		number -= digit[i]
    	}
    	if (number == 0) {
    		break
    	}
    }

    return letters;
}

module.exports = {
    toRomanNumerals
}