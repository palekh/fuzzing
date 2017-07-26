import {AnyFunction} from "./_types/anyFunction.type";
import {cornerCaseNumbers, nonConsecuentiveNumberArray} from "./number/number";

export function fuzzing() {
    return "fuzzing";
}

export function numberArrayFuzzing(target: AnyFunction): void {
    target();
    target(cornerCaseNumbers());
    target(nonConsecuentiveNumberArray());
}
