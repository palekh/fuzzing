import {Collector, ICollector} from "../collector/Collector";
import {IResultTyped} from "../types/result.type";

export interface IFuzzer {
    fuzz(): IFuzzer;

    successes(): IResultTyped[];

    errors(): IResultTyped[];

    warnings(): IResultTyped[];

    all(): IResultTyped[];
}

export type IFuzzerParams = any[];

export abstract class Fuzzer implements IFuzzer {
    protected readonly params: IFuzzerParams = [];
    protected collector: ICollector = Collector.create();

    public abstract fuzz(): Fuzzer;

    public successes(): IResultTyped[] {
        return this.collector.getSuccesses();
    }

    public errors(): IResultTyped[] {
        return this.collector.getErrors();
    }

    public warnings(): IResultTyped[] {
        return this.collector.getWarnings();
    }

    public all(): IResultTyped[] {
        return this.collector.getAll();
    }

    protected abstract fuzzIteration(args: any): void;
}
