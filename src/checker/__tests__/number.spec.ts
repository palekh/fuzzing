import {test} from "ava";
import {cornerCaseNumberArray, mathNumberArray} from "../number";

test("cornerCaseNumbers should contain correct array", (t) => {
    const numbers = cornerCaseNumberArray();

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

test("mathNumberArray should contain correct array", (t) => {
    const numbers = mathNumberArray();

    t.deepEqual(numbers, [
        Math.E,
        Math.PI,
        Math.LN2,
        Math.LN10,
        Math.LOG2E,
        Math.LOG10E,
        Math.SQRT1_2,
        Math.SQRT2,
    ]);
});
