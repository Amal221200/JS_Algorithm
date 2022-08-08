function cartesianProduct(a: number[], b: number[]) {
    let product: [number[]] = [[]]
    product.pop()
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            product.push([a[i], b[j]])
        }
    }

    return product
}

let a = [1, 2, 3]
let b = [4, 5, 6]
console.log(cartesianProduct(a, b))
// Big-O = O(mn)