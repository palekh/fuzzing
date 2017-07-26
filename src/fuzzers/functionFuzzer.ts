import {AnyFunction} from "../_types/anyFunction.type";
import {cornerCaseNumbers, nonConsecuentiveNumberArray} from "../number/number";
import {isStrangeResult} from "../strangeResults";
import {getUndefined} from "../undefined/undefined";
import {Fuzzer, IFuzzer} from "./fuzzer";

class FunctionFuzzer extends Fuzzer implements IFuzzer {
    protected readonly testSet: AnyFunction[] = [
        getUndefined,
        nonConsecuentiveNumberArray,
        cornerCaseNumbers,
    ];

    private func: AnyFunction;

    private constructor(func: AnyFunction) {
        super();
        this.func = func;
    }

    public static create(func: AnyFunction): FunctionFuzzer {
        return new FunctionFuzzer(func);
    }

    public fuzz(): Fuzzer {
        for (let i = 0; i < this.testSet.length; i += 1) {
            try {
                const funcResult = this.func(this.testSet[i]());
                if (isStrangeResult(funcResult)) {
                    this.warnings = [
                        ...this.warnings,
                        new Error(`You've got danger result: ${funcResult}. please check function implementation`),
                    ];
                }
            } catch (error) {
                this.errors = [
                    ...this.errors,
                    error,
                ];
            }
        }

        return this;
    }
}

export function functionFuzzer(func: AnyFunction): FunctionFuzzer {
    return FunctionFuzzer.create(func);
}
