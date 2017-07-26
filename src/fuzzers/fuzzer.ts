import {AnyFunction} from "../_types/anyFunction.type";

export interface IFuzzer {
    fuzz(): IFuzzer;
    getErrors(): Error[];
    getWarnings(): Error[];
}

export abstract class Fuzzer implements IFuzzer {
    protected readonly testSet: AnyFunction[];
    protected errors: Error[] = [];
    protected warnings: Error[] = [];

    protected constructor(...args: any[]) {
        // empty
    }

    public abstract fuzz(): Fuzzer;

    public getErrors(): Error[] {
        return this.errors;
    }

    public getWarnings(): Error[] {
        return this.warnings;
    }
}
