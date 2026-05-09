function countWords(str){
    let count = 0;

    for(i = 0; i < str.length; i++){
        if(str[i]!== " " && (i === 0 || str[i-1] === " ")){
            count++;
        }
        
    }
    return count;
}

console.log(countWords("Hey i am irfad"));
console.log(countWords("I am irfad"));
console.log(countWords("Hey irfad"));
