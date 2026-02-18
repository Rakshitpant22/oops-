// promise1.then(function(){
//     console.log("promise consumed");
// })


// directly can be called by this:

 new Promise(function(resolve,reject){
        setTimeout(function(){
        console.log("async is generated");
        resolve();
    },1000)
}).then(function(){
    console.log("promise2 consumed");
})


// With resolve 
const x = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Rakshit Pant",email:"rakshitpant22@gmail.com"});
    },1000);

})

x.then(function(user){
    console.log(user)

})


//
const promise4= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username: "Rakshit Pant",mob:"9315717408"});
        }
        else{
            reject("ERROR: something went wrong");
        }
    },500)
})

// jb promise pura hojae resolve and if not then catch use krte hai;
promise4.then((user)=>{
    console.log(user);     
    return user.username; // isse value nhi mil paegi islea hum ek or .then lgate h chaining ke lie
}).then((username)=>{
    console.log(username);
}).catch(function(err){
 console.log(err);
}).finally(()=>{
    console.log(" final ho gya bhai jo bhi hua");
})

// a end we can also use .finally to tell the final state of the promise


const promise5= new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let error=true;
        if(!error){
            resolve({username: "JAVASCRIPT ",mob:"91"});
        }
        else{
            reject("ERROR: JS went wrong");
        }
  },1000)
})

// ab promise ko generate krne k lie jruri nhi .then hi use krein  
// we can use asyncawait 

// async  function consumepromise5(){
//     const x= await promise5
//     console.log(x);
// }
// consumepromise5();

// ye resolve() hone pr to chl jaega but for reject case 
//(bcs in async await(cant be directly handled) bta rha h ki hmne isko try catch block m wrap nhi kia ha)

//so we use try catch

const promise6= new Promise(function(resolve,reject){
    setTimeout(function(){
      let error=false;
          if(!error){
              resolve({username: "JAVASCRIPT ",mob:"91"});
          }
          else{
              reject("ERROR: JS went wrong");
          }
    },1000)
  })

async function consumepromise6(){
    try{
        const y= await promise6
        console.log(y);
    }
    catch(error){
        console.log(error);
    }
}
consumepromise6();
//! promise se req kri or vha s hhtp eroor 404 mila to vo hmesha as a resolve()/response hi milega