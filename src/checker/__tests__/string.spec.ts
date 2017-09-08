import {cornerCaseStringArray} from "../string";

test("cornerCaseStringArray should contain correct array", () => {
    const strings = cornerCaseStringArray();

    expect(strings).toEqual([
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
