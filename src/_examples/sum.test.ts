import {test} from "ava";
import {functionFuzzer} from "../fuzzer/functionFuzzer";
import {sum} from "./sum";

test("summarize simple array", (t) => {
    const result = sum([1, 2, 3]);
    t.is(result, 6);
});

test("function fuzzing sum function", (t) => {
    t.is({}, functionFuzzer(sum).fuzz().getAllResults());
});
