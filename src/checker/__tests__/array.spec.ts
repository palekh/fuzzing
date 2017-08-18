import {test} from "ava";
import {nonConsequentArray} from "../array";

test("nonConsequentArray should contain undefined under set value", (t) => {
    const arr = nonConsequentArray(1);

    for (let i = 0; i < 13; i += 1) {
        t.is(arr[i], undefined);
    }

    t.is(arr[13], 1);
});
