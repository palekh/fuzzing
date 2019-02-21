import {FunctionFuzzerFactory, IFunctionFuzzerFactory} from "./fuzzerFactory/FunctionFuzzerFactory";
import {AnyFunction} from "./types/anyFunction.type";

export function fuzz(func: AnyFunction): IFunctionFuzzerFactory {
    return FunctionFuzzerFactory.create(func);
}
