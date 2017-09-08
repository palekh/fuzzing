import {getUndefined} from "../undefined";

describe("undefined checker", () => {
    test("getUndefined should return undefined", () => {
        expect(getUndefined()).toBe(undefined);
    });
});
