export function getStrangeResults() {
    return [
        NaN,
        undefined,
        null,
        Number.POSITIVE_INFINITY,
        Number.NEGATIVE_INFINITY,
    ];
}

export function isStrangeResult(result: any): boolean {
    const results = getStrangeResults();

    if (isNaN(result)) {
        return true;
    }

    for (let i = 1; i < results.length; i += 1) {
        if (results[i] === result) {
            return true;
        }
    }

    return false;
}
