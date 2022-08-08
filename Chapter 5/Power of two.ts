// function isPowerofTwo(n: number) {
//     for (let i = 0; i < n; i++) {
//         if (2 ** i === n) {
//             return 'is true'
//         } else if (2 ** i > n) {
//             return "is not true"
//         }
//     }
// }

// function isPowerofTwo(n: number) {
//     if (n < 1) return false
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false
//         }

//         n = n / 2
//     }

//     return true
// }

function isPowerofTwo(n: number) {
    if (n < 1) return false

    return (n & (n - 1)) === 0
}

console.log(isPowerofTwo(6))