import {Collector, ICollector} from "../collector/collector";
import {IResultTyped} from "../types/result.type";

export interface IFuzzer {
    fuzz(): IFuzzer;

    getResults(): IResultTyped[];

    getErrors(): IResultTyped[];

    getWarnings(): IResultTyped[];

    getAllResults(): IResultTyped[];
}

export type IFuzzerParams = any[];

export abstract class Fuzzer implements IFuzzer {
    protected readonly params: IFuzzerParams;
    protected collector: ICollector = Collector.create();

    protected constructor() {
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

    protected abstract fuzzIteration(args: any): void;
}
