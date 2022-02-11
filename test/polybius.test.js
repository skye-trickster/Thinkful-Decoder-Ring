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

        it("should ignore capitalization", () => 
        {
            const actual = polybius("Thinkful")
            const expected = "4432423352125413"
            expect(actual).to.equal(expected)
        })

        it("should leave in spaces", () => {
            const actual = polybius("hello World")
            const expected = "3251131343 2543241341"
            expect(actual).to.equal(expected)
        })

        it("should encode both i and j as the same number", () => {
            const actual = polybius("the quick brown fox jumped over the lazy dog")
            const expected = "443251 1454423152 2124432533 124335 425423535141 43155124 443251 13115545 414322"
            expect(actual).to.equal(expected)
        })
    })
})