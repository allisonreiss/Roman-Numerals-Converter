const { toRomanNumerals, toDigitNumber } = require('./index')
const equal = require('assert').deepEqual

describe('Test converting digit numbers to Roman Numerals', () => {
    // Tests for basic conversions to one letter
    it('Should return I when converting 1', () => {
        equal(toRomanNumerals(1), "I")
    })
    it('Should return V when converting 5', () => {
        equal(toRomanNumerals(5), "V")
    })
    it('Should return X when converting 10', () => {
        equal(toRomanNumerals(10), "X")
    })
    it('Should return L when converting 50', () => {
        equal(toRomanNumerals(50), "L")
    })
    it('Should return C when converting 100', () => {
        equal(toRomanNumerals(100), "C")
    })
    it('Should return D when converting 500', () => {
        equal(toRomanNumerals(500), "D")
    })
    it('Should return M when converting 1000', () => {
        equal(toRomanNumerals(1000), "M")
    })

    // Tests for error checking of invalid parameters
    it('Should return "" if non-number is passed in', () => {
        equal(toRomanNumerals('A'), "")
    })
    it('Should return "" if null is passed in', () => {
        equal(toRomanNumerals(null), "")
    })
    it('Should return "" if non-integer is passed in', () => {
        equal(toRomanNumerals(12.1), "")
    })
    it('Should return "" if negative number is passed in', () => {
        equal(toRomanNumerals(-10), "")
    })

    // Tests for adding values for Roman Numerals
    it('Should return XV when converting 15', () => {
        equal(toRomanNumerals(15), "XV")
    })
    it('Should return MMDXI when converting 2511', () => {
        equal(toRomanNumerals(2511), "MMDXI")
    })
    it('Should return III when converting 3', () => {
        equal(toRomanNumerals(3), "III")
    })
    it('Should return MMDCCLXVI when converting 2766', () => {
        equal(toRomanNumerals(2766), "MMDCCLXVI")
    })
    it('Should return MMXVIII when converting 2018', () => {
        equal(toRomanNumerals(2018), "MMXVIII")
    })
    it('Should return CLXIII when converting 163', () => {
        equal(toRomanNumerals(163), "CLXIII")
    })

    // Test for subtracting values for Roman Numerals
    it('Should return IV when converting 4', () => {
        equal(toRomanNumerals(4), "IV")
    })
    it('Should return IX when converting 9', () => {
        equal(toRomanNumerals(9), "IX")
    })
    it('Should return XL when converting 40', () => {
        equal(toRomanNumerals(40), "XL")
    })
    it('Should return XC when converting 90', () => {
        equal(toRomanNumerals(90), "XC")
    })
    it('Should return CD when converting 400', () => {
        equal(toRomanNumerals(400), "CD")
    })
    it('Should return CM when converting 900', () => {
        equal(toRomanNumerals(900), "CM")
    })

    // Test for adding and subtracting values for Roman Numerals
    it('Should return MCMLIII when converting 1953', () => {
        equal(toRomanNumerals(1953), "MCMLIII")
    })
    it('Should return MMMCDXXXIV when converting 3434', () => {
        equal(toRomanNumerals(3434), "MMMCDXXXIV")
    })
    it('Should return CMXCIX when converting 999', () => {
        equal(toRomanNumerals(999), "CMXCIX")
    })
    it('Should return MMDLXXXIV when converting 2584', () => {
        equal(toRomanNumerals(2584), "MMDLXXXIV")
    })
})

describe('Test converting Roman Numerals to digit number', () => {
    // Tests for basic one letter conversions
    it('Should return 1 when converting I', () => {
        equal(toDigitNumber("I"), 1)
    })
    it('Should return 5 when converting V', () => {
        equal(toDigitNumber("V"), 5)
    })
    it('Should return 10 when converting X', () => {
        equal(toDigitNumber("X"), 10)
    })
    it('Should return 50 when converting L', () => {
        equal(toDigitNumber("L"), 50)
    })
    it('Should return 100 when converting C', () => {
        equal(toDigitNumber("C"), 100)
    })
    it('Should return 500 when converting D', () => {
        equal(toDigitNumber("D"), 500)
    })
    it('Should return 1000 when converting M', () => {
        equal(toDigitNumber("M"), 1000)
    })

    // Tests for error checking of invalid parameters
    it('Should return -1 if empty string is passed in', () => {
        equal(toDigitNumber(""), -1)
    })
    it('Should return -1 if null is passed in', () => {
        equal(toDigitNumber(null), -1)
    })
    it('Should return -1 if invalid letters passed in', () => {
        equal(toDigitNumber("A"), -1)
    })
    it('Should return -1 if invalid letters with valid letters passed in', () => {
        equal(toDigitNumber("MBCVI"), -1)
    })
    it('Should return -1 if invalid letter with valid letter passed in', () => {
        equal(toDigitNumber("VZ"), -1)
    })
    it('Should return -1 if invalid character passed in', () => {
        equal(toDigitNumber("!"), -1)
    })
    it('Should return -1 if digit passed in', () => {
        equal(toDigitNumber(10), -1)
    })

    // Tests for passing in lower case roman numeral
    it('Should return 1 when converting i', () => {
        equal(toDigitNumber("i"), 1)
    })
    it('Should return 10 when converting x', () => {
        equal(toDigitNumber("x"), 10)
    })
    it('Should return 500 when converting d', () => {
        equal(toDigitNumber("d"), 500)
    })

    // Tests for adding letters
    it('Should return 11 when converting XI', () => {
        equal(toDigitNumber("XI"), 11)
    })
    it('Should return 1666 when converting MDCLXVI', () => {
        equal(toDigitNumber("MDCLXVI"), 1666)
    })
    it('Should return 3117 when converting MMMCXVII', () => {
        equal(toDigitNumber("MMMCXVII"), 3117)
    })
    it('Should return 35 when converting XXXV', () => {
        equal(toDigitNumber("XXXV"), 35)
    })
    it('Should return 73 when converting LXXIII', () => {
        equal(toDigitNumber("LXXIII"), 73)
    })
    it('Should return 2011 when converting mmxi', () => {
        equal(toDigitNumber("mmxi"), 2011)
    })

    // Tests for subtracting letters
    it('Should return 4 when converting IV', () => {
        equal(toDigitNumber("IV"), 4)
    })
    it('Should return 909 when converting CMIX', () => {
        equal(toDigitNumber("CMIX"), 909)
    })
    it('Should return 444 when converting CDXLIV', () => {
        equal(toDigitNumber("CDXLIV"), 444)
    })
    it('Should return 940 when converting CMXL', () => {
        equal(toDigitNumber("CMXL"), 940)
    })
    it('Should return 94 when converting XCIV', () => {
        equal(toDigitNumber("XCIV"), 94)
    })

})

