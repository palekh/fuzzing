import {test} from "ava";
import {cornerCaseStringArray, nonConsequentStringArray} from "../string";

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

test("nonConsequentNumberArray should contain undefined under set value", (t) => {
    const strings = nonConsequentStringArray();

    for (let i = 0; i < 13; i += 1) {
        t.is(strings[i], undefined);
    }

    t.is(strings[13], "string");
});
