import {test} from "ava";
import {fuzzing} from "./fuzzing";

test("Smoke test fuzzer", (t) => {
    t.is(fuzzing(), "fuzzing");
});
