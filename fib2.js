let m = 0;
let n = 1;
let sum = 0;
let str = "0 1 ";
// console.log(m);
// console.log(n);
while(sum <=1000) {
    sum=m+n;
    if (sum >1000) break
    m=n;
    n=sum
    str= str + sum + " ";
 }
console.log(str);