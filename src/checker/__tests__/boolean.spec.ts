import {cornerCaseBooleanArray} from "../boolean";

test("cornerCaseBooleanArray should contain correct array", () => {
    const booleans = cornerCaseBooleanArray();

    expect(booleans).toEqual([
        false,
        true,
    ]);
});
