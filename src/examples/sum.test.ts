import {functionFuzzer} from "../fuzzerFactory/functionFuzzerFactory";
import {sum} from "./sum";

test("summarize simple array", () => {
    const result = sum([1, 2, 3]);
    expect(result).toBe(6);
});

test("function fuzzing sum function", () => {
    expect({}).toBe(functionFuzzer(sum).numberArray().getAllResults());
});
