import {FunctionFuzzerFactory, IFunctionFuzzerFactory} from "./fuzzerFactory/FunctionFuzzerFactory";
import {FuzzingPreset} from "./fuzzingPreset/FuzzingPreset";
import {AnyFunction} from "./types/anyFunction.type";

export function fuzz(func: AnyFunction): IFunctionFuzzerFactory {
    return FunctionFuzzerFactory.create(func);
}

export const preset = new FuzzingPreset();
