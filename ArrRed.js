const arr = [1,2,3,4,5,6,7,8,9,10]

const sum = arr.reduce((prev,curr)=>{
    let a = prev + curr;
    return a;
},0)

console.log(sum)

//console.log([]+1-2-3)