import {sum} from "./sum.js";

console.log("Using sum.test");


test("adds 2+2 to be equal to 4", () => {
    expect(sum(2,2)).toBe(4);
})