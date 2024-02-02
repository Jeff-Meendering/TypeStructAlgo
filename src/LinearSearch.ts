const array: number[] = [1, 2, 3, 4, 5];

function LinearSearch(arr: number[], v: number): boolean {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === v) {
            return true;
        }
    }
    return false;
}

console.log(LinearSearch(array, 3))

console.log(LinearSearch(array, 5))

console.log(LinearSearch(array, 12))