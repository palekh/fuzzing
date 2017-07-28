import {AnyFunction} from "../_types/anyFunction.type";
import {cornerCaseNumberArray, mathNumberArray, nonConsequentNumberArray} from "../check/number/number";
import {getUndefined} from "../check/undefined/undefined";
import {FunctionFuzzer} from "../fuzzer/functionFuzzer";
import {IFuzzer} from "../fuzzer/fuzzer";

export interface IFunctionFuzzerFactory {
    number(): IFuzzer;

    numberArray(): IFuzzer;

    all(): IFuzzer;
}

export class FunctionFuzzerFactory implements IFunctionFuzzerFactory {
    private readonly func: AnyFunction;

    private constructor(func: AnyFunction) {
        this.func = func;
    }

    public static create(func: AnyFunction): FunctionFuzzerFactory {
        return new FunctionFuzzerFactory(func);
    }

    public number(): IFuzzer {
        return FunctionFuzzer.create(
            this.func,
            [
                getUndefined(),
                ...cornerCaseNumberArray(),
                ...mathNumberArray(),
            ],
        );
    }

    public numberArray(): IFuzzer {
        return FunctionFuzzer.create(
            this.func,
            [
                getUndefined(),
                nonConsequentNumberArray(),
                cornerCaseNumberArray(),
                mathNumberArray(),
            ],
        );
    }

    public all(): IFuzzer {
        return FunctionFuzzer.create(
            this.func,
            [
                getUndefined(),
                nonConsequentNumberArray(),
                cornerCaseNumberArray(),
                ...cornerCaseNumberArray(),
                mathNumberArray(),
                ...mathNumberArray(),
            ],
        );
    }
}

export function functionFuzzer(func: AnyFunction): IFunctionFuzzerFactory {
    return FunctionFuzzerFactory.create(func);
}
