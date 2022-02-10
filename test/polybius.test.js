// Write your tests here!
const { polybius } = require("../src/polybius.js")
const { expect } = require("chai")

describe ("polybius() testing", () => {
    describe("Polybius encoding:", () => {
        it("should encode characters to a string of numbers", () =>
        {
            const actual = polybius("thinkful")
            const expected = "4432423352125413"
            expect(actual).to.equal(expected)
        })
        it("should leave in spaces", () => {
            const actual = polybius("Hello World")
            const expected = "3251131343 2543241341"
            expect(actual).to.equal(expected)
        })
    })
})