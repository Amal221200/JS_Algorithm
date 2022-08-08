function gcd(a: number, b: number): number {
    if (a === 0) {
        return b
    }

    return gcd(b % a, a)
}

console.log(gcd(9, 3))