import {cornerCaseBooleanArray, nonConsequentBooleanArray} from "../checker/boolean";
import {cornerCaseNumberArray, mathNumberArray, nonConsequentNumberArray} from "../checker/number";
import {cornerCaseStringArray, nonConsequentStringArray} from "../checker/string";
import {FunctionFuzzer} from "../fuzzer/FunctionFuzzer";
import {IFuzzer, IFuzzerParams} from "../fuzzer/Fuzzer";
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
        return this.createFuzzer([
            ...cornerCaseNumberArray(),
            ...mathNumberArray(),
        ]);
    }

    public numberArray(): IFuzzer {
        return this.createFuzzer([
            nonConsequentNumberArray(),
            cornerCaseNumberArray(),
            mathNumberArray(),
        ]);
    }

    public string(): IFuzzer {
        return this.createFuzzer([
            ...cornerCaseStringArray(),
        ]);
    }

    public stringArray(): IFuzzer {
        return this.createFuzzer([
            cornerCaseStringArray(),
            nonConsequentStringArray(),
        ]);
    }

    public boolean(): IFuzzer {
        return this.createFuzzer([
            ...cornerCaseBooleanArray(),
        ]);
    }

    public booleanArray(): IFuzzer {
        return this.createFuzzer([
            cornerCaseBooleanArray(),
            nonConsequentBooleanArray(),
        ]);
    }

    public all(): IFuzzer {
        return this.createFuzzer([
            nonConsequentNumberArray(),
            cornerCaseNumberArray(),
            ...cornerCaseNumberArray(),
            mathNumberArray(),
            ...mathNumberArray(),
            cornerCaseStringArray(),
            ...cornerCaseStringArray(),
            nonConsequentStringArray(),
            cornerCaseBooleanArray(),
            ...cornerCaseBooleanArray(),
            nonConsequentBooleanArray(),
        ]);
    }

    private createFuzzer(input: IFuzzerParams): IFuzzer {
        return FunctionFuzzer.create(this.func, input).fuzz();
    }
}

export function functionFuzzer(func: AnyFunction): IFunctionFuzzerFactory {
    return FunctionFuzzerFactory.create(func);
}
