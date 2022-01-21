const unique = (word)=>{
   const newArr = word.split('')
for(i=0;i<newArr.length;i++){
    for(j=i+1;j<newArr.length;j++){
        // console.log(newArr[i],newArr[j])
    if(newArr[i] == newArr[j]){
        // console.log(newArr[i],newArr[j])
        return false
    }
    }}
return true}

console.log(unique('monday'))
console.log(unique('asdfghjklyuiopwehzxcvbn'))