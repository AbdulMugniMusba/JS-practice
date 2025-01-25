let numbers = [4, 7, 12, 15, 9];
let num2 = numbers.map((n) => n % 2 == 0 ? n*2 : n*1);
console.log(num2);
let num3 = num2.map((n) => n % 2 == 0 ? "even" : "odd");
console.log(num3);