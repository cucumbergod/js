
let n1 = 1
let n2 = 2
let n3 = 3
sum = 0
let numbers1 = [n1, n2, n3]
let numbers = [n1, n2, n3]
for (let i in numbers1) {
    numbers1[i] = numbers1[i] ** 3;
    numbers1[i] = Math.abs(numbers1[i]);
}
for (let i = 0; i < numbers1.length; i++) {
    sum += numbers1[i];
}
AriMean = sum / numbers1.length
console.log(AriMean)

let sum1 = 0
for ( let i in numbers ) {
    numbers[i] = numbers[i] ** 2
}
for (let i = 0; i < numbers1.length; i++) {
    sum1 += Math.sqrt(numbers[i]);
}

console.log(sum1)


