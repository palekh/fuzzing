import {cornerCaseNumbers, nonConsecuentiveNumberArray} from "./number/number";

export function fuzzing() {
    return "fuzzing";
}

export function numberArrayFuzzing(target: (...params: any[]) => any): void {
    target();
    target(cornerCaseNumbers());
    target(nonConsecuentiveNumberArray());
}
