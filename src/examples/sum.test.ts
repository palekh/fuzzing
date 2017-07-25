import {test} from "ava";
import {cornerCaseNumbers} from "../number/number";
import {numberArrayFuzzing} from "../fuzzing";
import {sum} from "./sum";

test("summarize simple array", (t) => {
    const result = sum([1, 2, 3]);
    t.is(result, 6);
});

test("summarize corner cases array", (t) => {
    const result = sum(cornerCaseNumbers());
    t.is(result, NaN);
});

test("fuzzing sum function", (t) => {
    t.notThrows(() => numberArrayFuzzing(sum));
});
