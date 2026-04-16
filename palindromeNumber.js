function palindromeNumber(num){
    if(num < 0) return false;
    let pal = num;
    let rev = 0;

    while(num > 0){
        let lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num/10);
    }
    return pal === rev;
}

console.log(palindromeNumber(3456));
console.log(palindromeNumber(6556));
console.log(palindromeNumber(-6556));


