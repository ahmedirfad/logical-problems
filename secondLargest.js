const arr = [10,5,4,33,21];

let largest = arr[0];
let secondLargest = arr[0];

for(let i = 1; i < arr.length; i++){
    if(arr[i]>largest){
        secondLargest = largest;
        largest= arr[i];
    }

    else if(arr[i] > secondLargest && arr[i]!== largest){
        secondLargest = arr[i];
    }
}

console.log(secondLargest);
