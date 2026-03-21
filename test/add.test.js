const addnumber = require("../addNumber")

describe("Should add numbers", () => {
    test("should add all nnumbers", () => {
        const sum = addnumber(1, 2, 3, 4, 5);
        expect(sum).toBe(15);
    })

    test("should return 0 if no numbers", () => {
        const sum = addnumber();
        expect(sum).toBe(0);
    })

    test("should work with single numbers", () => {
        const sum = addnumber(5);
        expect(sum).toBe(5);
    })
})