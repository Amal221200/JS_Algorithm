function binarySearch(arr: number[], t: number) {
    let left = arr[0]
    let right = arr[arr.length - 1]

    while (left <= right) {
        let middleIndex = Math.floor((left + right) / 2)
        if (arr[middleIndex] === t) {
            return middleIndex
        } else if (t < arr[middleIndex]) {
            right = middleIndex - 1
        } else {
            left = middleIndex + 1
        }
    }

    return -1
}

const arr = [1, 2, 3, 4, 5]
console.log(binarySearch(arr, 9))