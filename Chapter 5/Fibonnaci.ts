let fibb = (n: number) => {
    let coll = [0,1]
    for(let i=2; i<n; i++) {
        coll[i] = coll[i-1] + coll[i-2]
    }
    return coll
}

console.log(fibb(4))