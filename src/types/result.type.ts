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
    Success = "success",
    Warning = "warning",
    Error = "error",
}
