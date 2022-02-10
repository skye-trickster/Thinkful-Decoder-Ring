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