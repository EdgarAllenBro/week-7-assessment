const sumZero = (arr)=>{
    for(i=0;i<arr.length-1;i++){
    for (j=1;j<arr.length;j++){
    if(arr[i]+arr[j] === 0){
        return true
    }
    }
    } return false
}

const array = [1,2,-6,3,4,5,7,8,6,10]

console.log(sumZero(array))

//O(n)