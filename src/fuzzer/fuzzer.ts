import {AnyFunction} from "../_types/anyFunction.type";
import {IResultTyped} from "../_types/result";
import {Collector, ICollector} from "../collector/collector";

export interface IFuzzer {
    fuzz(): IFuzzer;

    getResults(): IResultTyped[];

    getErrors(): IResultTyped[];

    getWarnings(): IResultTyped[];

    getAllResults(): IResultTyped[];
}

export abstract class Fuzzer implements IFuzzer {
    protected readonly testSet: AnyFunction[];
    protected collector: ICollector = Collector.create();

    protected constructor(...args: any[]) {
        // empty
    }

    public abstract fuzz(): Fuzzer;

    public getResults(): IResultTyped[] {
        return this.collector.getResults();
    }

    public getErrors(): IResultTyped[] {
        return this.collector.getErrors();
    }

    public getWarnings(): IResultTyped[] {
        return this.collector.getWarnings();
    }

    public getAllResults(): IResultTyped[] {
        return this.collector.getAllResults();
    }
}
