export function cornerCaseStringArray(): string[] {
    return [
        "",
        "0",
        "1",
        "UPPER_CASE",
        "lower_case",
        "CamelCase",
        "!@#$%^&*()_+-=`~[]\\{}|;':,./<>?",
        "1234567890",
        new Array(1000).join("a"),
    ];
}

export function nonConsequentStringArray(): string[] {
    const arr = [];
    arr[13] = "string";

    return arr;
}
