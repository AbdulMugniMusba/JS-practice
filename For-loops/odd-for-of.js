let num = [11,22,32,45,51];
for (const i of num) {
    // console.log(i);
    
    let remainder = i % 2;
    if (remainder > 0) {
        console.log(`Odd numbers are : ${i}`);
    }
}