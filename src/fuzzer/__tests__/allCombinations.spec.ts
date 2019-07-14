import {allCombinations} from "../allCombinations";

describe("allCombinations", () => {
    test("should return all possible combinations for provided input", () => {
        const input = [
            ["c", true, {}],
            [4, []],
        ];
        const output = [
            ["c", 4],
            [true, 4],
            [{}, 4],
            ["c", []],
            [true, []],
            [{}, []],
        ];

        expect(allCombinations(input)).toStrictEqual(output);
    });

    test("should return all possible combinations for complex input", () => {
        const input = [
            ["c", true, {}],
            [4, []],
            [NaN, null, Math.PI],
        ];
        const output = [
            ["c", 4, NaN],
            [true, 4, NaN],
            [{}, 4, NaN],
            ["c", [], NaN],
            [true, [], NaN],
            [{}, [], NaN],
            ["c", 4, null],
            [true, 4, null],
            [{}, 4, null],
            ["c", [], null],
            [true, [], null],
            [{}, [], null],
            ["c", 4, Math.PI],
            [true, 4, Math.PI],
            [{}, 4, Math.PI],
            ["c", [], Math.PI],
            [true, [], Math.PI],
            [{}, [], Math.PI],
        ];

        expect(allCombinations(input)).toStrictEqual(output);
    });
});
