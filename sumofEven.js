let sum=0;
let remainder;

for (let index = 0; index <=10; index++) {
      remainder= index%2
      if(remainder==0){
        console.log(index);
        sum=sum+index;
      }
}
console.log(sum);