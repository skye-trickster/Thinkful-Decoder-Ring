// Write your tests here!
const { expect } = require("chai")
const { caesar } = require("../src/caesar.js")

describe ("Caesar cypher happy testing: ", () => {
    it("should be able to encode letters forwards", () =>{
        const actual = caesar("thinkful", 3)
        const expected = "wklqnixo"
        expect(actual).to.eql(expected)
    })

    it("should be able to encode letters backwards", () => {
        const actual = caesar("thinkful", -3)
        const expected = "qefkhcri"
        expect(actual).to.eql(expected)
    })

    it("should be able decode forward", () => {
        const actual = caesar("wklqnixo", 3, false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    })
})