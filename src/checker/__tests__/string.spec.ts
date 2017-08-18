import {test} from "ava";
import {cornerCaseStringArray} from "../string";

test("cornerCaseStringArray should contain correct array", (t) => {
    const strings = cornerCaseStringArray();

    t.deepEqual(strings, [
        "",
        "0",
        "1",
        "UPPER_CASE",
        "lower_case",
        "CamelCase",
        "!@#$%^&*()_+-=`~[]\\{}|;':,./<>?",
        "1234567890",
        new Array(1000).join("a"),
    ]);
});
