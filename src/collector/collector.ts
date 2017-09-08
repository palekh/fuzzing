import {IResult, IResultTyped, ResultType} from "../types/result.type";

export interface ICollector {
    addResult(result: IResult): void;

    getResults(): IResultTyped[];

    addWarning(warning: IResult): void;

    getWarnings(): IResultTyped[];

    addError(error: IResult): void;

    getErrors(): IResultTyped[];

    getAllResults(): IResultTyped[];
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

    public addResult(result: IResult): void {
        this.results = [
            ...this.results,
            {
                ...result,
                type: ResultType.Result,
            },
        ];
    }

    public getResults(): IResultTyped[] {
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

    public getAllResults(): IResultTyped[] {
        return [
            ...this.getResults(),
            ...this.getWarnings(),
            ...this.getErrors(),
        ];
    }
}
