import {test} from "ava";
import {getUndefined} from "../undefined";

test("getUndefined should return undefined", (t) => {
    t.is(getUndefined(), undefined);
});
