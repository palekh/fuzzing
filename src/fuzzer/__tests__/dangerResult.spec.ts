import {isDangerResult} from "../dangerResult";

describe("dangerResults", () => {

    test("isDangerResult should return true for null, undefined and NaN", () => {
        expect(isDangerResult(null)).toBe(true);
        expect(isDangerResult(undefined)).toBe(true);
        expect(isDangerResult(NaN)).toBe(true);
    });

    test("isDangerResult should return false for normal values", () => {
        expect(isDangerResult(1)).toBe(false);
        expect(isDangerResult("")).toBe(false);
        expect(isDangerResult("asd")).toBe(false);
        expect(isDangerResult("123")).toBe(false);
        expect(isDangerResult([])).toBe(false);
        expect(isDangerResult({})).toBe(false);
    });
});
