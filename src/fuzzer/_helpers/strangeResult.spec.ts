import {test} from "ava";
import {getStrangeResults, isStrangeResult} from "./strangeResults";

test("strangeResults should contain expected values", (t) => {
    const strangeResults = getStrangeResults();

    t.deepEqual(strangeResults, [
        NaN,
        undefined,
        null
    ]);
});

test("isStrangeResult should return true for values from strangeResults function", (t) => {
    const strangeResultsArray = getStrangeResults();

    for (let i = 0; i < strangeResultsArray.length; i += 1) {
        t.true(isStrangeResult(strangeResultsArray[i]));
    }
});
