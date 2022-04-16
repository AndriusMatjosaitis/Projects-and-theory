function isPythagoreanTriple(a, b, c) {
    const array = [a, b, c];
    array.sort();
    return ((array[2] ^ 2) === (array[0] ^ 2 + array[1] ^ 2));
}
console.log(isPythagoreanTriple(3, 4, 5));
console.log(isPythagoreanTriple(5, 4, 3));
console.log(isPythagoreanTriple(2, 4, 5));