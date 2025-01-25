let names = ["Mugni", "Arshad", "Suhaim"];
// 1. for loop
console.log("Using For-loop");
for (let i = 0; i < names.length; i++) {
  console.log(` ${names[i]}`);
}
// 2. for-in loop
console.log("Using For-in loop");
for (const i in names) {
  console.log(` ${names[i]}`);
}
// 3. for-of loop
console.log("Using for-of loop");
let sales = [1000, 2000, 3000];
let totalSales = 0;
for (const i of sales) {
  totalSales += i;
  console.log(` sale is ${i}`);
}
console.log(`Totsl Sales : ${totalSales}`);

// 4. for-Each loop
console.log("Using For-Each loop");
let saless = [1000, 2000, 3000];
let totalSaless = 0;
sales.forEach((sales, i) => {
  console.log(`Day ${i + 1} Sales = ${sales}`);
  totalSaless += sales;
});
console.log(`Total sales = ${totalSaless}`);