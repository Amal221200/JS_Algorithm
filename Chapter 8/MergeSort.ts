function mergeSort(arr: number[]) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(leftArr, rightArr)
}

function merge(leftArr: number[], rightArr: number[]) {
    const sortedArr: number[] = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift()!)
        } else {
            sortedArr.push(rightArr.shift()!)
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

let arr: number[] = [3, 5, 7, 14, 89, 0, 13]

mergeSort(arr)
console.log(arr)