function findPairs(nums, target){
    let result = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i]+nums[j] === target){
                result.push([nums[i], nums[j]]);
            }
        }
    }
    return result;
}

console.log(findPairs([1, 2, 3, 4], 5));
console.log(findPairs([1, 2, 6, 4, 5, 0], 6));