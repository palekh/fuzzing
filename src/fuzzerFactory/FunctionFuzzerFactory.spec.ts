import {sum} from "./__mocks__/sum";
import {functionFuzzer, FunctionFuzzerFactory} from "./FunctionFuzzerFactory";

describe("FunctionFuzzerFactory", () => {
    const sumFuzzerFactory: any = functionFuzzer(sum);

    test("functionFuzzer should create function fuzzer instance", () => {
        expect(sumFuzzerFactory instanceof FunctionFuzzerFactory).toBe(true);
    });

    test("functionFuzzer should create fuzzer with internal func", () => {
        expect(sumFuzzerFactory.func).toBe(sum);
    });
});
