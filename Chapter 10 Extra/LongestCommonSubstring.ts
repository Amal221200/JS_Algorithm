function LCSubstr(A: string, B: string) {
    let result = 0
    let LCStuff = Array(A.length + 1).fill(undefined).map(() => Array(B.length + 1).fill(0))
    for (let i = 0; i <= A.length; i++) {
        for (let j = 0; j <= B.length; j++) {
            if (i == 0 || j == 0) {
                LCStuff[i][j] = 0
            } else if (A[i - 1] === " " || B[j-1] === " ") {
                LCStuff[i][j] = 0
            }
            else if (A[i - 1] === B[j - 1]) {
                LCStuff[i][j] = LCStuff[i - 1][j - 1] + 1
                result = Math.max(result, LCStuff[i][j])
            } else {
                LCStuff[i][j] = 0
            }
        }
    }
    console.log(LCStuff)
    return result
}


let A = "Hello World!"
let B = "Hello"
console.log(LCSubstr(A, B))