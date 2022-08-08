function linearSearch(arr: number[], t: number) {
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i]
        if (e === t) {
            return i
        } else {
            return -1
        }
    }
}

const arr = [1, 2, 3, 4, 5]

console.log(linearSearch(arr, 3))