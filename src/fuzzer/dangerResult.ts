export function isDangerResult(result: any): boolean {
    if (
        typeof result === "number" && isNaN(result)
        || result === undefined
        || result === null
    ) {
        return true;
    }

    return false;
}
