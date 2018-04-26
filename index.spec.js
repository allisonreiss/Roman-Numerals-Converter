const { toRomanNumerals } = require('./index')
const equal = require('assert').deepEqual

describe('Test converting normal numbers to Roman Numerals', () => {
    // Tests for basic one letter conversions
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
    it('Should return IV when converting 40', () => {
        equal(toRomanNumerals(40), "XL")
    })
    it('Should return IV when converting 90', () => {
        equal(toRomanNumerals(90), "XC")
    })
    it('Should return IV when converting 400', () => {
        equal(toRomanNumerals(400), "CD")
    })
    it('Should return IV when converting 900', () => {
        equal(toRomanNumerals(900), "CM")
    })
})
