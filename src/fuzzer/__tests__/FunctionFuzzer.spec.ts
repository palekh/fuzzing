import {getValues} from "../__mocks__/getValues.mock";
import {FunctionFuzzer} from "../FunctionFuzzer";

describe("FunctionFuzzer", () => {
    test("method fuzzIteration should catch error when passed incorrect parameter", () => {
        const fuzzer = FunctionFuzzer.create(getValues, []);
        (fuzzer as any).fuzzIteration(undefined);
        expect(fuzzer.errors().length).toBe(1);
        expect(fuzzer.all().length).toBe(1);
    });

    test("method fuzzIteration should handle warning when returned value is danger", () => {
        const fuzzer = FunctionFuzzer.create(getValues, []);
        (fuzzer as any).fuzzIteration(null);
        expect(fuzzer.warnings().length).toBe(1);
        expect(fuzzer.all().length).toBe(1);
    });

    test("method fuzzIteration should handle success when function worked without unexpected behaviour", () => {
        const fuzzer = FunctionFuzzer.create(getValues, []);
        (fuzzer as any).fuzzIteration({});
        expect(fuzzer.successes().length).toBe(1);
        expect(fuzzer.all().length).toBe(1);
    });

    test("method fuzz should run fuzzing over undefined, null and passed parameters", () => {
        const fuzzer = FunctionFuzzer.create(getValues, [{}]);
        fuzzer.fuzz();
        expect(fuzzer.successes().length).toBe(1);
        expect(fuzzer.warnings().length).toBe(1);
        expect(fuzzer.errors().length).toBe(1);
        expect(fuzzer.all().length).toBe(3);
    });
});
