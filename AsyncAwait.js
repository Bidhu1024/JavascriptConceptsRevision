// async function f() {
//     return 1;
//   }
  
//   f().then(alert);

// async function f() {
//     return Promise.resolve(1);
//   }
  
//   f().then(alert)


//above two examples return the same value 
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
 
    console.log(result); // "done!"
  }
  
  f();