import {testNonConsequentArray} from "../__tests__/array.spec";
import {cornerCaseStringArray, nonConsequentStringArray} from "../string";

describe("string checker", () => {
    testNonConsequentArray({
        expected: "string",
        func: nonConsequentStringArray,
        message: "nonConsequentStringArray should contain undefined under set value",
    });

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

});
