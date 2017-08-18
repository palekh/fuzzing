import {test} from "ava";
import {getNull} from "../null";

test("getNull should return null", (t) => {
    t.is(getNull(), null);
});
