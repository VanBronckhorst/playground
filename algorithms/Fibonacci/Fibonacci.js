export function bottomUpFibonacci(n) {
    if (n < 1) {
        return 0;
    } else if (n < 3) {
        return 1;
    }

    // F(1)
    let a = 1;
    // F(2)
    let b = 1;

    let k = 2;

    while (k < n) {
        let tmp = b;
        b = a + b;
        a = tmp;
        k++;
    }

    return b;
}

export function recursiveFastDoubling(n) {
    return __recursiveFastDoubling(n, {});
}

function __recursiveFastDoubling(n, mem) {
    if (n < 1) {
        return 0;
    } else if (n < 3) {
        return 1;
    }
    
    if (n in mem) {
        return mem[n];
    }

    let k;
    if (n % 2 === 1) {
        k = (n - 1) / 2;
    } else {
        k = n / 2;
    }

    let fN = __recursiveFastDoubling(k, mem);
    let fNPlus = __recursiveFastDoubling(k + 1, mem);

    let res;
    if (n % 2 === 1) {
        res = fNPlus * fNPlus + fN * fN;
    } else {
        res = fN * (2 * fNPlus - fN);
    }
    mem[n] = res;
    return res;
}