import {sum} from "./sum.mjs";

console.log("Using sum.test");

describe("Testing sum fun", () => {

    test("adds 2+2 to be equal to 4", () => {
    expect(sum(2,2)).toBe(4);
    });

     test("adds -1+-5 to be equal to -6", () => {
    expect(sum(-1,-5)).toBe(-6);
    });

});
