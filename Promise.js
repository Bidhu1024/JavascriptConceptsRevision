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

const PromiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve("This is a resolved promise with value")
        }else{
            reject("this is an rejected promsie")
        }
    },4000)
})

PromiseFour.then((text)=>{
    console.log(text)
    console.log("resolved")     // this will not be printed because of the rejection in previous line
}).catch((err)=>{
    console.log(err);
})