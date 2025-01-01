function printFib(a){
let m = 0;
let n = 1;
let str = "0 1 "
for (i = 0; i <=a-2; i++) {
    sum=m+n;
    m=n;
    n=sum
    str= str + sum + " ";
 }
console.log("Fibonessi Series are  " +str );
}
printFib(7)