import {IDictionary} from "../../types/dictionary.type";

export function getValues<T = any>(obj: IDictionary<T>): T[] | undefined {
    if (obj === null) { // tslint:disable-line
        return undefined;
    }

    return Object.keys(obj).map(key => obj[key]);
}
