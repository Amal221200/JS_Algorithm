function bubbleSort(arr: number[]) {
    let swapped: boolean

    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}

let arr: number[] = [5, 3, 7, 14, 89, 0, 13]
bubbleSort(arr)
console.log(arr)