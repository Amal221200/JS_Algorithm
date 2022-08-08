function factorial(n: number) {
    let fact = 1;
    if (n < 0) return null
    for (let i = 2; i <= n; i++) {
        fact *= i
    }

    return fact
}

console.log(factorial(2))