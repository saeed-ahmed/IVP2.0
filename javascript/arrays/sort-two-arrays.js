//without any buildin function
function mergeSortedArrays(arr1,arr2){
    let newArray = [];
    arr1.forEach(item=> newArray.push(item));
    arr2.forEach(item=> newArray.push(item));    
    for(let i=0;i<newArray.length -1;i++){
        let swape = 0;
        if(newArray[i]>newArray[i+1]){
            swape = newArray[i];
            newArray[i]= newArray[i+1];
            newArray[i+1] = swape;
        }
    }
    return newArray;
}

//using concat
function mergeSortedArrays1(arr1,arr2){
    let newArray = arr1.concat(arr2);
    
    for(let i=0;i<newArray.length -1;i++){
        let swape = 0;
        if(newArray[i]>newArray[i+1]){
            swape = newArray[i];
            newArray[i]= newArray[i+1];
            newArray[i+1] = swape;
        }
    }
    return newArray;
}

let a1 = [0,3,4,31];
let a2 = [4,6,30];
//let merge = a1.concat(a2);
//console.log(merge);
//console.log(mergeSortedArrays(a1,a2));
console.log(mergeSortedArrays1(a1,a2));
