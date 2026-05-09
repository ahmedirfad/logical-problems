function countVowels(words){
    const vowels = "aeiou";
    let result = [];

    for (let word of words) {
        let count = 0;

        for(let char of word.toLowerCase()){
            if(vowels.includes(char)){
                count++;            
            }
        }
        result.push(count);
    }
return result;                  
}

console.log(countVowels(["apple", "sky", "orange"]));