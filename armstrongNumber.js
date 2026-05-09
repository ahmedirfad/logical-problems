function armstrongNumber(num){
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

for(let i = 10; i <= 1000; i++){
    if(armstrongNumber(i)){
        console.log(i);
        
    }
}
