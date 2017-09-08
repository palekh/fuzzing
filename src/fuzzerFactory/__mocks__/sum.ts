export function sum(arrayToSum: number[]): number {
    let i = 0;
    let result = 0;

    while (i < arrayToSum.length) {
        result += arrayToSum[i];
        i += 1;
    }

    return result;
}
