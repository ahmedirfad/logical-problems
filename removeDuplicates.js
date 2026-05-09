function removeDuplicates(arr){
    let arr1 = [];

    for(let i = 0; i < arr.length; i++){
        let isDuplicate = false;

        for(let j = 0; j < arr1.length; j++){
            if(arr[i] === arr1[j]){
                isDuplicate = true;
                break;
            }
        }

        if(!isDuplicate){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

console.log(removeDuplicates([1,2,3,2,4,3,4,5,6]));