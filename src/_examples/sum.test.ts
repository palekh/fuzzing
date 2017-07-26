import {test} from "ava";
import {functionFuzzer} from "../fuzzers/functionFuzzer";
import {numberArrayFuzzing} from "../fuzzing";
import {cornerCaseNumbers} from "../number/number";
import {sum} from "./sum";

test("summarize simple array", (t) => {
    const result = sum([1, 2, 3]);
    t.is(result, 6);
});

test("summarize corner cases array", (t) => {
    const result = sum(cornerCaseNumbers());
    t.is(result, NaN);
});

test("array fuzzing sum function", (t) => {
    t.notThrows(() => numberArrayFuzzing(sum));
});

test("function fuzzing sum function", (t) => {
    t.is({}, functionFuzzer(sum).fuzz().getWarnings());
});
