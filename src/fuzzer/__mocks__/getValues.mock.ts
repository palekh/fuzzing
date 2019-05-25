import {IDictionary} from "../../types/dictionary.type";

export function getValues<T = any>(obj: IDictionary<T>): T[] | undefined {
    if (obj === null) { // tslint:disable-line
        return undefined;
    }

    return Object.keys(obj).map(key => obj[key]);
}

export async function getValuesAsync<T = any>(obj: IDictionary<T>): Promise<T[] | undefined> {
    return new Promise((resolve, reject) => {
        if (obj === null) { // tslint:disable-line
            reject(undefined);
        }

        resolve(Object.keys(obj).map(key => obj[key]));
    });
}
