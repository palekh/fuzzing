import {sum} from "./__mocks__/sum.mock";
import {sumAsync} from "./__mocks__/sumAsync.mock";
import {fuzz, preset} from "./index";

describe("fuzz", () => {
    test("should create snapshots with correct error descriptions", () => {
        const results = fuzz(sum)
            .all()
            .all();

        expect(results).toMatchSnapshot();
    });

    test("should create snapshots with correct error descriptions for async functions", async () => {
        const results = await fuzz(sumAsync)
            .all()
            .all();

        expect(results).toMatchSnapshot();
    });
});

describe("under", () => {
    test("should create snapshots with correct error descriptions", () => {
        const results = fuzz(sum)
            .under(preset.all())
            .all();

        expect(results).toMatchSnapshot();
    });
});

describe("preset", () => {
    test("should exist", () => {
        expect(preset).not.toBe(undefined);
    });
});
