import {FunctionFuzzer} from "../../fuzzer/FunctionFuzzer";
import {fuzz} from "../../index";
import {sum} from "../__mocks__/sum.mock";
import {FunctionFuzzerFactory} from "../FunctionFuzzerFactory";

describe("FunctionFuzzerFactory", () => {
    const sumFuzzerFactory = fuzz(sum);

    test("functionFuzzer should create function fuzzer instance", () => {
        expect(sumFuzzerFactory instanceof FunctionFuzzerFactory).toBe(true);
    });

    test("functionFuzzer should create fuzzer with internal func", () => {
        expect((sumFuzzerFactory as any).func).toBe(sum);
    });

    test("factory methods should creates fuzzer without error", () => {
        const methodNames: Array<keyof FunctionFuzzerFactory> = [
            "boolean", "booleanArray", "number", "numberArray", "string", "stringArray", "all",
        ];

        methodNames.forEach(method => {
            expect((sumFuzzerFactory as any)[method]() instanceof FunctionFuzzer).toBe(true);
            expect(() => (sumFuzzerFactory as any)[method]()).not.toThrow();
        });
    });
});
