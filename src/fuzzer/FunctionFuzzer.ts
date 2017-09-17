import {getNull} from "../checker/null";
import {getUndefined} from "../checker/undefined";
import {AnyFunction} from "../types/anyFunction.type";
import {isDangerResult} from "./dangerResult";
import {Fuzzer, IFuzzer, IFuzzerParams} from "./Fuzzer";

export class FunctionFuzzer extends Fuzzer implements IFuzzer {
    protected readonly params: IFuzzerParams;
    private func: AnyFunction;

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
                    description: `Danger result: ${result}. Check function implementation`,
                    input,
                    result,
                });
            } else {
                this.collector.addSuccess({
                    description: "Normal result.",
                    input,
                    result,
                });
            }
        } catch (error) {
            this.collector.addError({
                description: "Function execution failed.",
                error,
                input,
            });
        }
    }
}
