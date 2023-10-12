const PromiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('PromiseOne');
        resolve()
    },2000)
})

PromiseOne.then(()=>{
    console.log("promise1");
}).catch((err)=>{
    console.error(err);
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise 2 initiated")
        resolve()
    },2000)
}).then(()=>{
    console.log("promise 2 executed");
})


// how to get values from resolve

const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        resolve({name:"gudu", email:"bidhu1024av@gmail.com"})
    },3000)
})

PromiseThree.then((user)=>{
console.log(user)
})

