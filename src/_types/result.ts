export interface IResultTyped extends IResult {
    type: ResultType;
}

export interface IResult {
    description: string;
    param: any;
    result?: any;
    error?: Error;
}

export enum ResultType {
    Result = "result",
    Warning = "warning",
    Error = "error",
}
