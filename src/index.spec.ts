import {sum} from "./__mocks__/sum.mock";
import {fuzz} from "./index";

describe("fuzz", () => {
    test("should create snapshots with correct error descriptions", () => {
        const errors = fuzz(sum)
            .numberArray()
            .all();

        expect(errors).toMatchSnapshot();
    });
});
