import {getStrangeResults, isStrangeResult} from "./strangeResults";

describe("strangeResults", () => {
    test("strangeResults should contain expected values", () => {
        const strangeResults = getStrangeResults();

        expect(strangeResults).toEqual([
            Number.NaN,
            undefined,
            null,
        ]);
    });

    test("isStrangeResult should return true for values from strangeResults function", () => {
        const strangeResultsArray = getStrangeResults();

        for (let i = 0; i < strangeResultsArray.length; i += 1) {
            expect(isStrangeResult(strangeResultsArray[i])).toBe(true);
        }
    });
});
