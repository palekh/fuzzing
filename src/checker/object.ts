import {nonConsequentArray} from "./array";

export function cornerCaseObjectArray(): object[] {
    return [
        {},
        {
            key: "value",
        },
        {
            1: "value",
            false: "value",
            key: "value",
            key1: "value",
            null: "value",
            true: "value",
            undefined: "value",
            1.23: "value",
        },
        {
            key: {
                key: {
                    key: {
                        key: {
                            key: {
                                key: {
                                    key: {
                                        key: {
                                            key: {
                                                key: {
                                                    key: {
                                                        key: {
                                                            key: {
                                                                key: {
                                                                    key: {
                                                                        key: "value",
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    ];
}

export function nonConsequentObjectArray(): object[] {
    return nonConsequentArray({});
}
