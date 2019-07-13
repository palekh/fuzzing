import {getNull} from "../checker/null";
import {getUndefined} from "../checker/undefined";
import {isDangerResult} from "../fuzzer/dangerResult";
import {Fuzzer, IFuzzer, IFuzzerParams} from "../fuzzer/Fuzzer";
import {AnyFunction} from "../types/anyFunction.type";

export class FunctionFuzzer extends Fuzzer implements IFuzzer {
    protected readonly params: IFuzzerParams[];
    private readonly func: AnyFunction;

    private constructor(func: AnyFunction, params: IFuzzerParams[]) {
        super();
        this.func = func;
        this.params = params;
    }

    public static create(func: AnyFunction, params: IFuzzerParams[]): FunctionFuzzer {
        const reachParams = params.map(parameter => [
            getUndefined(),
            getNull(),
            ...parameter,
        ]);

        return new FunctionFuzzer(func, reachParams);
    }

    public fuzz(): this {
        for (let i = 0; i < this.params.length; i += 1) {
            const parameter = this.params[i];

            for (let j = 0; j < parameter.length; j += 1) {
                const input = parameter[j];
                this.fuzzIteration(input);
            }
        }

        return this;
    }

    protected fuzzIteration(input: any): void {
        try {
            const result = this.func(input);

            if (result && typeof result.then === "function") {
                this.jobs.push(
                    result
                        .then((asyncResult: any) => {
                            this.processResult(input, asyncResult, undefined);
                        })
                        .catch((error: any) => {
                            this.processResult(input, undefined, error);
                        }),
                );

                return;
            }

            this.processResult(input, result, undefined);
        } catch (error) {
            this.processResult(input, undefined, error);
        }
    }

    protected processResult(input: any, result: any, error: any): void {
        if (error) {
            this.collector.addError({
                description: "FAILED: Function execution failed, check error stack trace",
                error,
                input,
            });

            return;
        }

        if (isDangerResult(result)) {
            this.collector.addWarning({
                description: "WARNING: Function returned result might be nullable or dangerous in some way",
                input,
                result,
            });
        } else {
            this.collector.addSuccess({
                description: "SUCCESS: Function returned result is OK and no errors happened",
                input,
                result,
            });
        }
    }
}
