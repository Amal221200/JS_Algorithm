function TowerOfHanoi(n: number, fromRod: 'A' | 'B' | 'C', toRod: 'A' | 'B' | 'C', usingRod: 'A' | 'B' | 'C') {
    if (n === 1) {
        console.log(`Move disc 1 from ${fromRod} to ${toRod}`);
        return
    }

    TowerOfHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`Move rod ${n} from ${fromRod} to ${toRod}`)
    TowerOfHanoi(n - 1, usingRod, toRod, fromRod)

}

TowerOfHanoi(3, 'A', 'C', 'B')