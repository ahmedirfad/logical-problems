function missingNumber(arr){
    let n = arr.length + 1;

    let expectedSum = (n*(n+1))/2;
    let actualSum = 0;

    for(let num of arr){
        actualSum += num;
    }

    return expectedSum - actualSum;
}

console.log(missingNumber([1,2,4,5]));
