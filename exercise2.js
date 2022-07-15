const test1 = [1, 2, 3, 5, 6, 8, 9];
const test2 =   [-2, -1]
const test3 =  [-10, -5, 0, 5, 10];

function squareArraay(array) {
    return array.map(element => element *element).sort();
}

console.log(squareArraay(test1));
console.log(squareArraay(test2));
console.log(squareArraay(test3));