import {Collector, ICollector} from "../collector/Collector";
import {IResultTyped} from "../types/result.type";

type FuzzerResult = IResultTyped[] | Promise<IResultTyped[]>;

export interface IFuzzer {
    fuzz(): IFuzzer;

    successes(): FuzzerResult;

    errors(): FuzzerResult;

    warnings(): FuzzerResult;

    all(): FuzzerResult;
}

export type IFuzzerParams = any[];

export abstract class Fuzzer implements IFuzzer {
    protected jobs: Array<Promise<any>> = [];
    protected readonly params: IFuzzerParams = [];
    protected collector: ICollector = Collector.create();

    public abstract fuzz(): Fuzzer;

    public successes(): FuzzerResult {
        return this.checkJobs(() => this.collector.getSuccesses());
    }

    public errors(): FuzzerResult {
        return this.checkJobs(() => this.collector.getErrors());
    }

    public warnings(): FuzzerResult {
        return this.checkJobs(() => this.collector.getWarnings());
    }

    public all(): FuzzerResult {
        return this.checkJobs(() => this.collector.getAll());
    }

    protected abstract fuzzIteration(args: any): void;

    protected checkJobs(getResults: () => IResultTyped[]): FuzzerResult {
        if (this.jobs.length === 0) {
            return getResults();
        }

        const promise = Promise.all(this.jobs)
            .then(getResults);

        return promise;
    }
}
