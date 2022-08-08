function climbingStaircase(n: number) {
    let climbing = [1, 2]
    for (let i = 2; i <= n; i++) {
        climbing[i] = climbing[i - 1] + climbing[i - 2]
    }

    return climbing[n - 1]
}

console.log(climbingStaircase(5))