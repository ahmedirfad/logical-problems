function palindrome(str){
    let result = "";

    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    return result === str;
}

console.log(palindrome("affa"));
console.log(palindrome("daninad"));
console.log(palindrome("david"));
