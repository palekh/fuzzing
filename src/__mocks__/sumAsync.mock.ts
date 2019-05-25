export async function sumAsync(arrayToSum: number[]): Promise<number> {
    return new Promise(resolve => {
        let i = 0;
        let result = 0;

        while (i < arrayToSum.length) {
            result += arrayToSum[i];
            i += 1;
        }

        resolve(result);
    });
}
