let number = 635//трехзначное число
function sum(n) {//ввод функции для сложения
    let sum = 0;
    while(n) sum += n % 10, n = Math.floor(n / 10);
    return sum;
  }
function multi(n){
    let multi = 1
    while(n) multi *= n % 10, n = Math.floor(n / 10);
    return multi;
    
}
console.log('ПРОИЗВЕДЕНИЕ ЦИФР =', multi(number))
console.log('СУММА ЦИФР =', sum(number))