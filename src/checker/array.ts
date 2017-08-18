export function nonConsequentArray<T>(value: T, position: number = 13): T[] {
    const arr = [];
    arr[position] = value;

    return arr;
}
