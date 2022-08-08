function insertionSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        let NTI = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > NTI) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = NTI
    }
}

let arr: number[] = [3, 5, 7, 14, 89, 0, 13]

insertionSort(arr)
console.log(arr)