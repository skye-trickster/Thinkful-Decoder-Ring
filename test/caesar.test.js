// Write your tests here!
const { expect } = require("chai")
const { caesar } = require("../src/caesar.js")


describe ("caesar() exception handling:", () => {
    it("should return false if there is no shift value", () => {
        const actual = caesar("thikful")
        expect(actual).to.be.false
    })

    it("should return false if the shift value is 0", () => {
        const actual = caesar("thikful", 0)
        expect(actual).to.be.false
    })

    it("should return false if the shift value > 25", () => {
        const actual = caesar("thikful", 999)
        expect(actual).to.be.false

    })

    it("should return false if the shift value is < -25", () => {
        const actual = caesar("thikful", -999)
        expect(actual).to.be.false
    })
})

describe ("caesar() happy testing: ", () => {
    it("should be able to encode letters forwards", () =>{
        const actual = caesar("thinkful", 3)
        const expected = "wklqnixo"
        expect(actual).to.equal(expected)
    })

    it("should be able to encode letters backwards", () => {
        const actual = caesar("thinkful", -3)
        const expected = "qefkhcri"
        expect(actual).to.equal(expected)
    })

    it("should be able decode letters forward", () => {
        const actual = caesar("wklqnixo", 3, false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })

    it("should be able to decode letters backwards", () => {
        const actual = caesar("qefkhcri", -3, false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })


})

describe ("caesar() special handles: ", () => {
    it("should be able to wrap around the character list when going off of the alphabet when going upwards", () => {
        const actual = caesar("abcdefghijklmnopqrstuvwxyz", 5)
        const expected = "fghijklmnopqrstuvwxyzabcde"
        expect(actual).to.equal(expected)
    })
    it("should be able to wrap around the character list when going off of the alphabet when going upwards", () => {
        const actual = caesar("abcdefghijklmnopqrstuvwxyz", -5)
        const expected = "vwxyzabcdefghijklmnopqrstu"
        expect(actual).to.equal(expected)
    })
    it("should ignore non-alpha characters", () => {
        const actual = caesar("thinkful!2 5think890", 3)
        const expected =  "wklqnixo!2 5wklqn890"
        expect(actual).to.equal(expected)
    })
    it("should ignore capitalization", () => {
        const actual = caesar("Quick! Think of something!", 16)
        const expected = "gkysa! jxyda ev iecujxydw!"
        expect(actual).to.equal(expected)
    })
})