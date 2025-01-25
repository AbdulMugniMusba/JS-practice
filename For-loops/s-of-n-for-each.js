let num = [10,20,30,40,50];
let sum = 0;
num.forEach((num, i) => {
  console.log(`num ${i + 1}= ${num}`);
  sum += num;
});
console.log(`Total sum = ${sum}`);