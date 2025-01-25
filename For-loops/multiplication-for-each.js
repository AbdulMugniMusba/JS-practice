let array = [2, 3, 4];
function mul(n) {
  let ans;
  for (let i = 1; i <= 10; i++) {
    ans = n * i;
    console.log(`${n} X ${i} = ${ans}`);
  }
}
let totalSaless = 0;
sales.forEach((sales, i) => {
  console.log(`Day ${i + 1} Sales = ${sales}`);
  totalSaless += sales;
});
console.log(`Total sales = ${totalSaless}`);