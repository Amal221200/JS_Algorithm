function recursiveBinarySearch(arr: number[], t: number) {
    return search(arr, t, 0, arr.length - 1)
}

function search(arr: number[], t: number, left: number, right: number) {
    if (left > right) {
        return -1
    }

    let middleIndex = Math.floor((left + right) / 2)

    if (t === arr[middleIndex]) {
        return middleIndex
    }

    if (t > arr[middleIndex]) {
        return search(arr, t, middleIndex + 1, right)
    } else {
        return search(arr, t, left, middleIndex - 1)
    }
}

const arr = [1, 2, 3, 4, 5]
console.log(recursiveBinarySearch(arr, 4))