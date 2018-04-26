const { toRomanNumerals } = require('./index')
const equal = require('assert').deepEqual

describe('Test converting normal numbers to Roman Numerals', () => {
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
})
