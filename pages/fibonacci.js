import {bottomUpFibonacci, recursiveFastDoubling} from '../algorithms/Fibonacci/Fibonacci';


let d = new Date();
let sum = 0;
for (let i = 0; i < 10000; i++) {
    sum += recursiveFastDoubling(i);
}
console.log(new Date() - d);

d = new Date();
for (let i = 0; i < 10000; i++) {
    sum += bottomUpFibonacci(i);
}
console.log(new Date() - d);
console.log(sum);