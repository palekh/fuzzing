import {getDangerResults, isDangerResult} from "../dangerResult";

describe("dangerResults", () => {
    test("function getDangerResults should contain expected values", () => {
        const strangeResults = getDangerResults();

        expect(strangeResults).toEqual([
            Number.NaN,
            undefined,
            null,
        ]);
    });

    test("isDangerResult should return true for values from strangeResults function", () => {
        const strangeResultsArray = getDangerResults();

        for (let i = 0; i < strangeResultsArray.length; i += 1) {
            expect(isDangerResult(strangeResultsArray[i])).toBe(true);
        }
    });

    test("isDangerResult should return false for normal values", () => {
        expect(isDangerResult(1)).toBe(false);
        expect(isDangerResult("")).toBe(false);
        expect(isDangerResult([])).toBe(false);
    });
});
