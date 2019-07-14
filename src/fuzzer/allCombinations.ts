
export function allCombinations(input: any[][]): any[][] {
    const counters = input.map(() => 0);

    const output: any[][] = [];

    while (counters.length === input.length) {
        const iteration: any = [];
        counters.forEach((counter, index) => {
            iteration.push(input[index][counter]);
        });
        output.push(iteration);

        counters[0] += 1;
        counters.forEach((counter, index) => {
            const max = input[index].length;
            if (counter >= max) {
                counters[index] = 0;
                counters[index + 1] += 1;
            }
        });
    }

    return output;
}
