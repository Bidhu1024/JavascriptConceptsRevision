// const num=(num1,num2)=>{
//     console.log(num1+num2);
// }

// setInterval(()=>{
//     console.log("timeout");
// },1000)

// num(2,6)
 

function greet(name,callback){
    console.log("Hi " + name)
    callback()
}
function callme(){
    console.log('I am called')
}
greet('John',callme)