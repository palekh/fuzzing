import {cornerCaseBooleanArray, nonConsequentBooleanArray} from "../checker/boolean";
import {cornerCaseNumberArray, mathNumberArray, nonConsequentNumberArray} from "../checker/number";
import {cornerCaseObjectArray, nonConsequentObjectArray} from "../checker/object";
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

    public number(): IFuzzer {
        return this.createFuzzer([
            ...cornerCaseNumberArray(),
            ...mathNumberArray(),
        ]);
    }

    public numberArray(): IFuzzer {
        return this.createFuzzer([
            cornerCaseNumberArray(),
            mathNumberArray(),
            nonConsequentNumberArray(),
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

    public object(): IFuzzer {
        return this.createFuzzer([
            ...cornerCaseObjectArray(),
        ]);
    }

    public objectArray(): IFuzzer {
        return this.createFuzzer([
            cornerCaseObjectArray(),
            nonConsequentObjectArray(),
        ]);
    }

    public all(): IFuzzer {
        return this.createFuzzer([
            ...cornerCaseBooleanArray(),
            cornerCaseBooleanArray(),
            nonConsequentBooleanArray(),

            ...cornerCaseNumberArray(),
            ...mathNumberArray(),
            cornerCaseNumberArray(),
            mathNumberArray(),
            nonConsequentNumberArray(),

            ...cornerCaseStringArray(),
            cornerCaseStringArray(),
            nonConsequentStringArray(),

            ...cornerCaseObjectArray(),
            cornerCaseObjectArray(),
            nonConsequentObjectArray(),
        ]);
    }

    private createFuzzer(input: IFuzzerParams): IFuzzer {
        return FunctionFuzzer
            .create(this.func, input)
            .fuzz();
    }
}
