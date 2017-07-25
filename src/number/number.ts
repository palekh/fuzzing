export function cornerCaseNumbers(): number[] {
    return [
        0,
        1,
        -1,
        Number.MIN_VALUE,
        Number.MAX_VALUE,
        Number.NaN,
        Number.NEGATIVE_INFINITY,
        Number.POSITIVE_INFINITY,
    ];
}

export function nonConsecuentiveNumberArray(): number[] {
    const arr = [];
    arr[13] = 13;

    return arr;
}
