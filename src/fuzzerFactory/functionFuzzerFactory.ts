import {cornerCaseNumberArray, mathNumberArray, nonConsequentNumberArray} from "../checker/number";
import {cornerCaseStringArray, nonConsequentStringArray} from "../checker/string";
import {FunctionFuzzer} from "../fuzzer/functionFuzzer";
import {IFuzzer} from "../fuzzer/fuzzer";
import {AnyFunction} from "../types/anyFunction.type";

export interface IFunctionFuzzerFactory {
    number(): IFuzzer;

    numberArray(): IFuzzer;

    string(): IFuzzer;

    stringArray(): IFuzzer;

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
                ...cornerCaseNumberArray(),
                ...mathNumberArray(),
            ],
        );
    }

    public numberArray(): IFuzzer {
        return FunctionFuzzer.create(
            this.func,
            [
                nonConsequentNumberArray(),
                cornerCaseNumberArray(),
                mathNumberArray(),
            ],
        );
    }

    public string(): IFuzzer {
        return FunctionFuzzer.create(
            this.func,
            [
                ...cornerCaseStringArray(),
            ],
        );
    }

    public stringArray(): IFuzzer {
        return FunctionFuzzer.create(
            this.func,
            [
                cornerCaseStringArray(),
                nonConsequentStringArray(),
            ],
        );
    }

    public all(): IFuzzer {
        return FunctionFuzzer.create(
            this.func,
            [
                nonConsequentNumberArray(),
                cornerCaseNumberArray(),
                ...cornerCaseNumberArray(),
                mathNumberArray(),
                ...mathNumberArray(),
                cornerCaseStringArray(),
                ...cornerCaseStringArray(),
                nonConsequentStringArray(),
            ],
        );
    }
}

export function functionFuzzer(func: AnyFunction): IFunctionFuzzerFactory {
    return FunctionFuzzerFactory.create(func);
}
