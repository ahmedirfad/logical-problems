function isArmstrongNumber(num){
    let org = num;
    let arm = 0;

    let count = num.toString().length;

    while(num>0){
        let digit = num % 10;
        arm += digit ** count;
        num = Math.floor(num / 10);
    }

    return arm === org;
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(371));
console.log(isArmstrongNumber(193));
