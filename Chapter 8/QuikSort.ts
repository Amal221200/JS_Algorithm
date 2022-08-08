function quickSort(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr
    }
    let pivot: number = arr[arr.length - 1]
    let left: number[] = []
    let right: number[] = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr: number[] = [3, 5, 7, 14, 89, 0, 13]

quickSort(arr)
console.log(arr)