// function isPrime(n) {
//     let p;

//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             p = 'not prime'
//             break;
//         } else {
//             p = 'prime'
//         }
//     }

//     return p
// }

function isPrime(n: number) {
    let p: string;

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            p = 'not prime'
            break;
        } else {
            p = 'prime'
        }
    }

    return p!
}

console.log(isPrime(3))