import {multiply} from "./__mocks__/multiply.mock";
import {sum} from "./__mocks__/sum.mock";
import {fuzz, preset} from "./index";

describe("under", () => {
    test("should accept presets", () => {
        const results = fuzz(sum)
            .under(preset.string());

        const all = results.all();
        const errors = results.errors();
        const warnings = results.warnings();
        const successes = results.successes();

        expect(all).toMatchSnapshot();
        expect(all).toHaveLength(11);
        expect(errors).toHaveLength(2);
        expect(warnings).toHaveLength(0);
        expect(successes).toHaveLength(9);
    });

    test("should accept multiple presets", () => {
        const results = fuzz(multiply)
            .under(preset.number(), preset.number());

        const all = results.all();
        const errors = results.errors();
        const warnings = results.warnings();
        const successes = results.successes();

        expect(all).toMatchSnapshot();
        expect(all).toHaveLength(324);
        expect(errors).toHaveLength(0);
        expect(warnings).toHaveLength(76);
        expect(successes).toHaveLength(248);
    });
});
