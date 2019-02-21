import {IResult, IResultTyped, ResultType} from "../types/result.type";

export interface ICollector {
    addSuccess(result: IResult): void;

    getSuccesses(): IResultTyped[];

    addWarning(warning: IResult): void;

    getWarnings(): IResultTyped[];

    addError(error: IResult): void;

    getErrors(): IResultTyped[];

    getAll(): IResultTyped[];
}

interface ICollectorState {
    errors: IResultTyped[];
    successes: IResultTyped[];
    warnings: IResultTyped[];
}

export class Collector implements ICollector {
    private readonly state: ICollectorState;

    private constructor() {
        this.state = {
            errors: [],
            successes: [],
            warnings: [],
        };
    }

    public static create(): ICollector {
        return new Collector();
    }

    public addSuccess(success: IResult): void {
        this.add(success, "successes", ResultType.Success);
    }

    public getSuccesses(): IResultTyped[] {
        return this.state.successes;
    }

    public addWarning(warning: IResult): void {
        this.add(warning, "warnings", ResultType.Warning);
    }

    public getWarnings(): IResultTyped[] {
        return this.state.warnings;
    }

    public addError(error: IResult): void {
        this.add(error, "errors", ResultType.Error);
    }

    public getErrors(): IResultTyped[] {
        return this.state.errors;
    }

    public getAll(): IResultTyped[] {
        return [
            ...this.getSuccesses(),
            ...this.getWarnings(),
            ...this.getErrors(),
        ];
    }

    private add(result: IResult, stateKey: keyof ICollectorState, type: ResultType): void {
        this.state[stateKey] = [
            ...this.state[stateKey],
            {
                ...result,
                type,
            },
        ];
    }
}
