const isPan = (word)=>{
const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
for(i=0;i<alpha.length;i++){
    if(word.toLowerCase().includes(alpha[i])){
        console.log(alpha[i])
    }else{return false}
}return true
}

console.log(isPan('the quick brown fox jumped over the lazy dogs'))