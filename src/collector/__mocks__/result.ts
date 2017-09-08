import {IResult, IResultTyped, ResultType} from "../../types/result.type";

export const resultMock: IResult = {
    description: "Long description",
    param: "Passed parameters",
};

export function getResultTypedMock(type: ResultType): IResultTyped {
    return {
        ...resultMock,
        type,
    };
}
