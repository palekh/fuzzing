export function cornerCaseNumberArray(): number[] {
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

export function mathNumberArray(): number[] {
    return [
        Math.E,
        Math.PI,
        Math.LN2,
        Math.LN10,
        Math.LOG2E,
        Math.LOG10E,
        Math.SQRT1_2,
        Math.SQRT2,
    ];
}

export function nonConsequentNumberArray(): number[] {
    const arr = [];
    arr[13] = 13;

    return arr;
}
