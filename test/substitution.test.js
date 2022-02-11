// Write your tests here!
const { expect } = require("chai")
const { substitution } = require("../src/substitution.js")

describe ("substitution() function handling", () => {
    describe ("substitution() exception handling:", () => {
        it("should return false if there is no alphabet code", () => {
            const actual = substitution('thinkful')
            expect(actual).to.be.false
        })
        it("should return false if the alphabet code is too short", () => {
            const actual = substitution("thinkful", "short"); //> false
            expect(actual).to.be.false
        })
    
        it("should return false if the alphabet code is too long", () => {
            const actual = substitution("thikful", "qwertyuiopasdfghjklzxcvbnm,./")
            expect(actual).to.be.false
        })
    
        it("should return false if the alphabet code has repeated characters", () => {
            const actual = substitution("thikful", "abcabcabcabcabcabcabcabcyz")
            expect(actual).to.be.false
    
        })
    
    })

    describe ("substitution() encoding:", () => {
        it("should be able to correctly encode a message", () => {
            const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq") //=> 
            const expected = "ykrrpik"
            expect(actual).to.equal(expected)
        })
        it("should be able to maintain spaces", () => {
            const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = 'elp xhm xf mbymwwmfj dne'
            expect(actual).to.equal(expected)
        })
        it("should be able to ignore capitalization", () => {
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = 'elp xhm xf mbymwwmfj dne'
            expect(actual).to.equal(expected) 
        })
    })

    describe ("substitution() decoding:", () => {
        it("should be able to correctly decode a message", () => {
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false) //=> 
            const expected = "message"
            expect(actual).to.equal(expected)
        })
        it("should be able to maintain spaces", () => {
            const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = 'you are an excellent spy'
            expect(actual).to.equal(expected)
        })
    })
})

