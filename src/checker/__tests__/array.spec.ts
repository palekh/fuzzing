import {nonConsequentArray} from "../array";

test("nonConsequentArray should contain undefined under set value", () => {
    const arr = nonConsequentArray(1);

    for (let i = 0; i < 13; i += 1) {
        expect(arr[i]).toBe(undefined);
    }

    expect(arr[13]).toBe(1);
});
