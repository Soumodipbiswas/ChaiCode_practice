function add1(a: number, b: number) {
    return a + b;
}

const result1 = add1(5, 7);
console.log(result1);

function add2(a: number, b: number): string {
    return a.toString() + b.toString();
}

const result2 = add2(6, 7);
console.log(result2);