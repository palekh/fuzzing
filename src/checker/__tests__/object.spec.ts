import {testNonConsequentArray} from "../__tests__/array.spec";
import {cornerCaseObjectArray, nonConsequentObjectArray} from "../object";

describe("object checker", () => {
    testNonConsequentArray({
        expected: {},
        func: nonConsequentObjectArray,
        message: "nonConsequentNumberArray should contain undefined under set value",
    });

    test("cornerCaseObjectArray should contain correct array", () => {
        const objects = cornerCaseObjectArray();

        expect(objects).toEqual([
            {},
            {
                key: "value",
            },
            {
                1: "value",
                false: "value",
                key: "value",
                key1: "value",
                null: "value",
                true: "value",
                undefined: "value",
                1.23: "value",
            },
            {
                key: {
                    key: {
                        key: {
                            key: {
                                key: {
                                    key: {
                                        key: {
                                            key: {
                                                key: {
                                                    key: {
                                                        key: {
                                                            key: {
                                                                key: {
                                                                    key: {
                                                                        key: {
                                                                            key: "value",
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        ]);
    });
});
