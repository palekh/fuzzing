import {testNonConsequentArray} from "../__tests__/array.spec";
import {cornerCaseBooleanArray, nonConsequentBooleanArray} from "../boolean";

describe("boolean checker", () => {
    testNonConsequentArray({
        expected: false,
        func: nonConsequentBooleanArray,
        message: "nonConsequentBooleanArray should contain undefined under set value",
    });

    test("cornerCaseBooleanArray should contain correct array", () => {
        const booleans = cornerCaseBooleanArray();

        expect(booleans).toEqual([
            false,
            true,
        ]);
    });
});
