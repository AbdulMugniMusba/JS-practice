let numbers=[3,5,7,9];
numSum=numbers.reduce((total,n)=> n + total)
console.log(numSum);
numMul=numbers.reduce((total,n)=> n * total)
console.log(numMul);
numh=numbers.reduce((n1,n2)=> `${n1}-${n2}` )
console.log(numh);