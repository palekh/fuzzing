import {nonConsequentArray} from "./array";

export function cornerCaseBooleanArray(): boolean[] {
    return [
        false,
        true,
    ];
}

export function nonConsequentBooleanArray(): boolean[] {
    return nonConsequentArray(false);
}
