import {getNull} from "../checker/null";
import {getUndefined} from "../checker/undefined";
import {isDangerResult} from "../fuzzer/dangerResult";
import {Fuzzer, IFuzzer, IFuzzerParams} from "../fuzzer/Fuzzer";
import {AnyFunction} from "../types/anyFunction.type";

export class FunctionFuzzer extends Fuzzer implements IFuzzer {
    protected readonly params: IFuzzerParams;
    private readonly func: AnyFunction;

    private constructor(func: AnyFunction, params: IFuzzerParams) {
        super();
        this.func = func;
        this.params = params;
    }

    public static create(func: AnyFunction, params: IFuzzerParams): FunctionFuzzer {
        return new FunctionFuzzer(func, [
            getUndefined(),
            getNull(),
            ...params,
        ]);
    }

    public fuzz(): this {
        for (let i = 0; i < this.params.length; i += 1) {
            const parameter = this.params[i];
            this.fuzzIteration(parameter);
        }

        return this;
    }

    protected fuzzIteration(input: any): void {
        try {
            const result = this.func(input);

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
        } catch (error) {
            this.collector.addError({
                description: "FAILED: Function execution failed, check error stack trace",
                error,
                input,
            });
        }
    }
}
