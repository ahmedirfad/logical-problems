function countDigits(num){
    let count = 0;
    while(num > 0){
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

console.log(countDigits(1234));
console.log(countDigits(12345));
console.log(countDigits(12));
