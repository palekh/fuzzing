import {cornerCaseBooleanArray, nonConsequentBooleanArray} from "../checker/boolean";
import {cornerCaseNumberArray, mathNumberArray, nonConsequentNumberArray} from "../checker/number";
import {cornerCaseObjectArray, nonConsequentObjectArray} from "../checker/object";
import {cornerCaseStringArray, nonConsequentStringArray} from "../checker/string";
import {IFuzzerParams} from "../fuzzer/Fuzzer";

export interface IFuzzingPreset {
    number(): IFuzzerParams;
    numberArray(): IFuzzerParams;

    string(): IFuzzerParams;
    stringArray(): IFuzzerParams;

    boolean(): IFuzzerParams;
    booleanArray(): IFuzzerParams;

    object(): IFuzzerParams;
    objectArray(): IFuzzerParams;

    all(): IFuzzerParams;
}

export class FuzzingPreset implements IFuzzingPreset {

    public boolean(): IFuzzerParams {
        return [
            ...cornerCaseBooleanArray(),
        ];
    }

    public booleanArray(): IFuzzerParams {
        return [
            cornerCaseBooleanArray(),
            nonConsequentBooleanArray(),
        ];
    }

    public number(): IFuzzerParams {
        return [
            ...cornerCaseNumberArray(),
            ...mathNumberArray(),
        ];
    }

    public numberArray(): IFuzzerParams {
        return [
            cornerCaseNumberArray(),
            mathNumberArray(),
            nonConsequentNumberArray(),
        ];
    }

    public string(): IFuzzerParams {
        return [
            ...cornerCaseStringArray(),
        ];
    }

    public stringArray(): IFuzzerParams {
        return [
            cornerCaseStringArray(),
            nonConsequentStringArray(),
        ];
    }

    public object(): IFuzzerParams {
        return [
            ...cornerCaseObjectArray(),
        ];
    }

    public objectArray(): IFuzzerParams {
        return [
            cornerCaseObjectArray(),
            nonConsequentObjectArray(),
        ];
    }

    public all(): any[] {
        return [
            ...cornerCaseBooleanArray(),
            cornerCaseBooleanArray(),
            nonConsequentBooleanArray(),

            ...cornerCaseNumberArray(),
            ...mathNumberArray(),
            cornerCaseNumberArray(),
            mathNumberArray(),
            nonConsequentNumberArray(),

            ...cornerCaseStringArray(),
            cornerCaseStringArray(),
            nonConsequentStringArray(),

            ...cornerCaseObjectArray(),
            cornerCaseObjectArray(),
            nonConsequentObjectArray(),
        ];
    }
}
