import {getNull} from "../null";

describe("null checker", () => {
    test("getNull should return null", () => {
        expect(getNull()).toBe(null);
    });
});
