import {sum} from "./__mocks__/sum.mock";
import {sumAsync} from "./__mocks__/sumAsync.mock";
import {fuzz, preset} from "./index";

describe("fuzz", () => {
    test("should accept sync functions", () => {
        const results = fuzz(sum)
            .all();
        const all = results.all();
        const errors = results.errors();
        const warnings = results.warnings();
        const successes = results.successes();

        expect(all).toMatchSnapshot();
        expect(all).toHaveLength(42);
        expect(errors).toHaveLength(2);
        expect(warnings).toHaveLength(3);
        expect(successes).toHaveLength(37);
    });

    test("should accept async functions", async () => {
        const results = await fuzz(sumAsync)
            .all();
        const all = await results.all();
        const errors = await results.errors();
        const warnings = await results.warnings();
        const successes = await results.successes();

        expect(all).toMatchSnapshot();
        expect(all).toHaveLength(42);
        expect(errors).toHaveLength(2);
        expect(warnings).toHaveLength(3);
        expect(successes).toHaveLength(37);
    });
});

describe("preset", () => {
    test("should exist", () => {
        expect(preset).not.toBe(undefined);
    });
});
