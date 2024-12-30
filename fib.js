let m = 0;
let n = 1;
let str = "0 1 "
// console.log(m);
// console.log(n);
//sum = m + n;

for (i = 0; i <=10; i++) {
    sum=m+n;
    m=n;
    n=sum
    str= str + sum + " ";
 }
console.log(str);
