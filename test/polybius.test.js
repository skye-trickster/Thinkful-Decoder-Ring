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

    describe("Polybius decoding:", () => {
        it("should return false if the number of characters excluding spaces is odd", () => {
            const actual = polybius("44324233521254134", false)
            expect(actual).to.be.false
        })
        it("should decode letters, excluding spaces", () => {
            const actual = polybius("3251131343 2543241341", false); //> "hello world"
            const expected = "hello world"
            expect(actual).to.equal(expected)
        })
        it("should contain both i and j when decoding an i/j", () => {
            const actual = polybius("4432423352125413", false); //> "th(i/j)nkful
            expect(actual).to.include('i')
            expect(actual).to.include('j')
        })
    })
})