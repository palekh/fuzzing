import {test} from "ava";
import {cornerCaseBooleanArray} from "../boolean";

test("cornerCaseBooleanArray should contain correct array", (t) => {
    const booleans = cornerCaseBooleanArray();

    t.deepEqual(booleans, [
        true,
        false,
    ]);
});
