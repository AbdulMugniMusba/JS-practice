let array = [2, 3, 4];
function mul(n) {
  let ans;
  for (let i = 1; i <= 10; i++) {
    ans = n * i;
    console.log(`${n} X ${i} = ${ans}`);
  }
}
for (i = 0; i < array.length; i++) {
  mul(array[i]);
}
