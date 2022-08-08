function heapsPermutation(a: number[], size: number) {
    if (size === 1) {
        console.log(a)
        return
    }

    for (let i = 0; i < size; i++) {
        heapsPermutation(a, size - 1)

        if (size % 2 === 1) {
            let temp = a[0]
            a[0] = a[size - 1]
            a[size - 1] = temp
        } else {
            let temp = a[i]
            a[i] = a[size - 1]
            a[size - 1] = temp
        }
    }
}

// heapsPermutation([1, 2, 3], 3)


function combinationUtil(arr: number[], data: number[], start: number, end: number, index: number, r: number) {
    if (index == r) {
        for (let j = 0; j < r; j++) {
            document.write(data[j] + " ");
        }
        document.write("<br>")
    }

    for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
        data[index] = arr[i];
        combinationUtil(arr, data, i + 1, end, index + 1, r);
    }
}

function printCombination(arr: number[], n: number, r: number) {
    let data = new Array(r);

    combinationUtil(arr, data, 0, n - 1, 0, r);
}

let arr = [1, 2, 3, 4, 5];
let r = 3;
let n = arr.length;
printCombination(arr, n, r);
