import {multiply} from "./__mocks__/multiply.mock";
import {sum} from "./__mocks__/sum.mock";
import {fuzz, preset} from "./index";

describe("under", () => {
    test("should accept presets", () => {
        const results = fuzz(sum)
            .under(preset.all())
            .all();

        expect(results).toMatchSnapshot();
    });

    test("should accept multiple presets", () => {
        const results = fuzz(multiply)
            .under(preset.number(), preset.number())
            .all();

        expect(results).toMatchSnapshot();
    });
});
