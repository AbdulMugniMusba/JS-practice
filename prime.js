let n= 7;
let prime= true;

let i = 2;
while( i < n){
    let remainder = n % i ;
    console.log(i);
    if (remainder == 0) {
        prime= false;
        break;
    }
i++
}
if (prime) {
    console.log(n + " is a prime number");
    } else {
        console.log(n + " is not a prime number");
    }
