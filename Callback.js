const num=(num1,num2)=>{
    console.log(num1+num2);
}

setInterval(()=>{
    console.log("timeout");
},1000)

num(2,6)