function reverseNumber(num){
    let rev = 0;

    while(num > 0){
        let lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num/10);
    }
    return rev;
}

console.log(reverseNumber(3456));
console.log(reverseNumber(-3456));


