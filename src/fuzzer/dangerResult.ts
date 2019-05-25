export function getDangerResults(): any {
    return [
        Number.NaN,
        undefined,
        null,
    ];
}

export function isDangerResult(result: any): boolean {
    const results = getDangerResults();

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
