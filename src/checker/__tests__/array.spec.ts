import {nonConsequentArray} from "../array";

describe("array checker", () => {
    testNonConsequentArray({
        expected: 1,
        func: nonConsequentArray,
        message: "nonConsequentArray should contain undefined under set value",
    });
});

interface ITestNonConsequentArrayParams<T> {
    expected: T;
    message: string;

    func(value: T, position?: number): T[];
}

export function testNonConsequentArray<T>(params: ITestNonConsequentArrayParams<T>) {
    test(params.message, () => {
        const arr = params.func(params.expected);

        for (let i = 0; i < 13; i += 1) {
            expect(arr[i]).toBe(undefined);
        }

        expect(arr[13]).toBe(params.expected);
    });
}
