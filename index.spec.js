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
})
