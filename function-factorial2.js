let n = 5;
let mul = 1;
function factorial(n) {
  for (i = 5; i <= n; i--) {
    console.log(i);
       if(i==1){
        break;
    }
    mul = mul * i;
  }
  return mul;
}
 console.log(factorial(n))
