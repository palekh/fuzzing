import {getValues, getValuesAsync} from "../__mocks__/getValues.mock";
import {FunctionFuzzer} from "../FunctionFuzzer";

describe("FunctionFuzzer", () => {
    describe("sync", () => {
        test("should catch error when passed incorrect parameter", () => {
            const fuzzer = FunctionFuzzer.create(getValues, []);
            (fuzzer as any).fuzzIteration(undefined);
            expect(fuzzer.errors()).toHaveLength(1);
            expect(fuzzer.all()).toHaveLength(1);
        });

        test("should handle warning when returned value is danger", () => {
            const fuzzer = FunctionFuzzer.create(getValues, []);
            (fuzzer as any).fuzzIteration(null);
            expect(fuzzer.warnings()).toHaveLength(1);
            expect(fuzzer.all()).toHaveLength(1);
        });

        test("should handle success when function worked without unexpected behaviour", () => {
            const fuzzer = FunctionFuzzer.create(getValues, []);
            (fuzzer as any).fuzzIteration({});
            expect(fuzzer.successes()).toHaveLength(1);
            expect(fuzzer.all()).toHaveLength(1);
        });

        test("should run fuzzing over undefined, null and passed parameters", () => {
            const fuzzer = FunctionFuzzer.create(getValues, [{}]);
            fuzzer.fuzz();
            expect(fuzzer.successes()).toHaveLength(1);
            expect(fuzzer.warnings()).toHaveLength(1);
            expect(fuzzer.errors()).toHaveLength(1);
            expect(fuzzer.all()).toHaveLength(3);
        });
    });

    /* tslint:disable no-floating-promises */
    describe("async", () => {
        test("should catch error when passed incorrect parameter", async () => {
            const fuzzer = FunctionFuzzer.create(getValuesAsync, []);
            (fuzzer as any).fuzzIteration(undefined);
            expect(fuzzer.errors()).resolves.toHaveLength(1);
            expect(fuzzer.all()).resolves.toHaveLength(1);
        });

        test("should handle warning when returned value is danger", async () => {
            const fuzzer = FunctionFuzzer.create(getValuesAsync, []);
            (fuzzer as any).fuzzIteration(null);
            expect(fuzzer.warnings()).resolves.toHaveLength(1);
            expect(fuzzer.all()).resolves.toHaveLength(1);
        });

        test("should handle success when function worked without unexpected behaviour", async () => {
            const fuzzer = FunctionFuzzer.create(getValuesAsync, []);
            (fuzzer as any).fuzzIteration({});
            expect(fuzzer.successes()).resolves.toHaveLength(1);
            expect(fuzzer.all()).resolves.toHaveLength(1);
        });

        test("should run fuzzing over undefined, null and passed parameters", async () => {
            const fuzzer = FunctionFuzzer.create(getValuesAsync, [{}]);
            fuzzer.fuzz();
            expect(fuzzer.successes()).resolves.toHaveLength(1);
            expect(fuzzer.warnings()).resolves.toHaveLength(1);
            expect(fuzzer.errors()).resolves.toHaveLength(1);
            expect(fuzzer.all()).resolves.toHaveLength(3);
        });
    });
});
