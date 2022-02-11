// Write your tests here!
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
})

