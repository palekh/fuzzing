import {test} from "ava";
import {cornerCaseNumbers} from "./number";

test("Smoke corner case numbers test", (t) => {
    const numbers = cornerCaseNumbers();

    t.deepEqual(numbers, [
        0,
        1,
        -1,
        Number.MIN_VALUE,
        Number.MAX_VALUE,
        Number.NaN,
        Number.NEGATIVE_INFINITY,
        Number.POSITIVE_INFINITY,
    ]);
});
