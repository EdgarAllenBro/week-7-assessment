const longest = (list)=>{
    let long = list[0]
for(i=0;i<list.length;i++){
    // console.log(long, list[i])
if (long.length < list[i].length){
    long = list[i]
    // console.log(long)
}}return long.length
}

const list = ['hello','hi','wow','qwerty']

console.log(longest(list))