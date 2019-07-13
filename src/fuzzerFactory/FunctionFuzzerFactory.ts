import {FunctionFuzzer} from "../fuzzer/FunctionFuzzer";
import {IFuzzer, IFuzzerParams} from "../fuzzer/Fuzzer";
import {FuzzingPreset, IFuzzingPreset} from "../fuzzingPreset/FuzzingPreset";
import {AnyFunction} from "../types/anyFunction.type";

export interface IFunctionFuzzerFactory {
    number(): IFuzzer;
    numberArray(): IFuzzer;

    string(): IFuzzer;
    stringArray(): IFuzzer;

    boolean(): IFuzzer;
    booleanArray(): IFuzzer;

    object(): IFuzzer;
    objectArray(): IFuzzer;

    all(): IFuzzer;
    under(...input: IFuzzerParams): IFuzzer;
}

export class FunctionFuzzerFactory implements IFunctionFuzzerFactory {
    private readonly func: AnyFunction;
    private readonly preset: IFuzzingPreset;

    private constructor(func: AnyFunction) {
        this.func = func;
        this.preset = new FuzzingPreset();
    }

    public static create(func: AnyFunction): FunctionFuzzerFactory {
        return new FunctionFuzzerFactory(func);
    }

    public boolean(): IFuzzer {
        return this.createFuzzer(this.preset.boolean());
    }

    public booleanArray(): IFuzzer {
        return this.createFuzzer(this.preset.booleanArray());
    }

    public number(): IFuzzer {
        return this.createFuzzer(this.preset.number());
    }

    public numberArray(): IFuzzer {
        return this.createFuzzer(this.preset.numberArray());
    }

    public string(): IFuzzer {
        return this.createFuzzer(this.preset.string());
    }

    public stringArray(): IFuzzer {
        return this.createFuzzer(this.preset.stringArray());
    }

    public object(): IFuzzer {
        return this.createFuzzer(this.preset.object());
    }

    public objectArray(): IFuzzer {
        return this.createFuzzer(this.preset.objectArray());
    }

    public all(): IFuzzer {
        return this.createFuzzer(this.preset.all());
    }

    public under(...input: IFuzzerParams): IFuzzer {
        return this.createFuzzer(input[0]);
    }

    private createFuzzer(input: IFuzzerParams): IFuzzer {
        return FunctionFuzzer
            .create(this.func, input)
            .fuzz();
    }
}
