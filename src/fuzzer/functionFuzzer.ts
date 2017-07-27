import {AnyFunction} from "../_types/anyFunction.type";
import {cornerCaseNumbers, nonConsequentNumberArray} from "../check/number/number";
import {isStrangeResult} from "../check/strangeResults";
import {getUndefined} from "../check/undefined/undefined";
import {Fuzzer, IFuzzer} from "./fuzzer";

class FunctionFuzzer extends Fuzzer implements IFuzzer {
    protected readonly testSet: AnyFunction[];
    private func: AnyFunction;

    private constructor(func: AnyFunction, testSet: AnyFunction[] ) {
        super();
        this.func = func;
        this.testSet = testSet;
    }

    public static create(func: AnyFunction, testSet: AnyFunction[] ): FunctionFuzzer {
        return new FunctionFuzzer(func, testSet);
    }

    public fuzz(): Fuzzer {
        for (let i = 0; i < this.testSet.length; i += 1) {
            const testFunction = this.testSet[i];

            try {
                const funcResult = this.func(testFunction());

                if (isStrangeResult(funcResult)) {
                    this.collector.addWarning({
                        description: `Danger result: ${funcResult}. Check function implementation`,
                        result: funcResult,
                        testFunction,
                    });
                } else {
                    this.collector.addResult({
                        description: `Normal result.`,
                        result: funcResult,
                        testFunction,
                    });
                }
            } catch (error) {
                this.collector.addError({
                    description: `Function execution failed.`,
                    error,
                    testFunction,
                });
            }
        }

        return this;
    }
}

export function functionNumberArrayFuzzer(func: AnyFunction): FunctionFuzzer {
    return FunctionFuzzer.create(func, [
        getUndefined,
        nonConsequentNumberArray,
        cornerCaseNumbers,
    ]);
}

export function functionFuzzer(func: AnyFunction): FunctionFuzzer {
    return FunctionFuzzer.create(func, [
        getUndefined,
        nonConsequentNumberArray,
        cornerCaseNumbers,
    ]);
}
