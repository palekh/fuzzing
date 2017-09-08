import {Collector, ICollector} from "../collector/collector";
import {IResultTyped} from "../types/result.type";

export interface IFuzzer {
    fuzz(): IFuzzer;

    results(): IResultTyped[];

    errors(): IResultTyped[];

    warnings(): IResultTyped[];

    all(): IResultTyped[];
}

export type IFuzzerParams = any[];

export abstract class Fuzzer implements IFuzzer {
    protected readonly params: IFuzzerParams;
    protected collector: ICollector = Collector.create();

    protected constructor() {
        // empty
    }

    public abstract fuzz(): Fuzzer;

    public results(): IResultTyped[] {
        return this.collector.getResults();
    }

    public errors(): IResultTyped[] {
        return this.collector.getErrors();
    }

    public warnings(): IResultTyped[] {
        return this.collector.getWarnings();
    }

    public all(): IResultTyped[] {
        return this.collector.getAllResults();
    }

    protected abstract fuzzIteration(args: any): void;
}
