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

function toDigitNumber(romanNum)  {
	return true
}

module.exports = {
    toRomanNumerals, toDigitNumber
}