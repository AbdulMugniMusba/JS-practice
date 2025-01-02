let arrayFib=[]
let m=0;
let n=1;

arrayFib.push(0,1);

for (i = 0; i <=10; i++) {
    sum=m+n;
    m=n;
    n=sum
    arrayFib.push(sum);
 }
// console.log("Fibonessi Series are: " +str );

console.log(arrayFib);