const { toRomanNumerals } = require('./index')
const equal = require('assert').deepEqual

describe('Test converting normal numbers to Roman Numerals', () => {
    it('Should return I when converting 1', () => {
        equal(toRomanNumerals(1), I)
    })
})
