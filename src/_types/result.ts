import {AnyFunction} from "./anyFunction.type";

export interface IResultTyped extends IResult {
    type: ResultType;
}

export interface IResult {
    description: string;
    testFunction: AnyFunction;
    result?: any;
    error?: Error;
}

export enum ResultType {
    Result = "result",
    Warning = "warning",
    Error = "error",
}
