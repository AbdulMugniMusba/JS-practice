let sales=[1000,2000,3000,4000];
sales.push(5000,6000);
sales.unshift(8000);
sales.push(9000);

console.log("****************");
console.log(sales);
console.log("****************");

totalSales=0;
for (let i = 0; i < sales.length; i++) {
  totalSales=totalSales+sales[i];
  console.log(sales[i]);
}
console.log();
console.log(`Total Sales: ${totalSales}`);
