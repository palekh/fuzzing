import {test} from "ava";
import {cornerCaseNumberArray, nonConsequentNumberArray} from "./number";

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

test("nonConsequentNumberArray should contain undefined under set value", (t) => {
    const numbers = nonConsequentNumberArray();

    for (let i = 0; i < 13; i += 1) {
        t.is(numbers[i], undefined);
    }

    t.is(numbers[13], 13);
});
