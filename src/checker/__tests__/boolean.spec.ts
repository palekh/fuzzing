import {cornerCaseBooleanArray, nonConsequentBooleanArray} from "../boolean";
import {testNonConsequentArray} from "./array.spec";

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
