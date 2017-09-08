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

export class Collector implements ICollector {
    private results: IResultTyped[] = [];
    private errors: IResultTyped[] = [];
    private warnings: IResultTyped[] = [];

    private constructor() {
        // empty
    }

    public static create(): ICollector {
        return new Collector();
    }

    public addSuccess(result: IResult): void {
        this.results = [
            ...this.results,
            {
                ...result,
                type: ResultType.Success,
            },
        ];
    }

    public getSuccesses(): IResultTyped[] {
        return this.results;
    }

    public addWarning(warning: IResult): void {
        this.warnings = [
            ...this.warnings,
            {
                ...warning,
                type: ResultType.Warning,
            },
        ];
    }

    public getWarnings(): IResultTyped[] {
        return this.warnings;
    }

    public addError(error: IResult): void {
        this.errors = [
            ...this.errors,
            {
                ...error,
                type: ResultType.Error,
            },
        ];
    }

    public getErrors(): IResultTyped[] {
        return this.errors;
    }

    public getAll(): IResultTyped[] {
        return [
            ...this.getSuccesses(),
            ...this.getWarnings(),
            ...this.getErrors(),
        ];
    }
}
