function getLengths(words){
    let result = [];

    for(let word of words){
        result.push(word.length);
    }

    return result;
}

console.log(getLengths(["hi", "hello", "world"]));
