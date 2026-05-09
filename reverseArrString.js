function reverseArrString(words){
    let result = [];

    for (let word of words){
        let reversed = "";
        if(word.length > 3){    
        for(let i = word.length - 1; i >= 0; i--){
            reversed += word[i];
        }

        result.push(reversed)
    }
    else {
        result.push(word)
    }
}
    return result;
}

console.log(reverseArrString(["cat", "dog", "irfad"]));
