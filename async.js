// async function always returns a promise and if we return any other data it async function will bind data into promise Object

async function getdata(){
  return "rakshit";
} 

const pr = getdata();
console.log(pr);
pr.then((res)=> console.log(res));

// async + await is used to handle promises
const p = new Promise((resolve,reject)=>{
    setTimeout(() => {
    resolve("Promise Resolved value!")
    },3000);
})

async function handlePromise(){
    const val = await p;  // await keyword can only be used inside async function. and used in front of promise 
    console.log("Rakshit Pant");
    console.log(val);
}
handlePromise();


// ! without  async await;
    const p = new Promise((resolve,reject)=>{
    setTimeout(() => {
    resolve("Promise Resolved value!")
    },3000);
})

function getdata(){
    p.then((res)=>{console.log(res)});
    console.log("Rakshit Pant");  // first this print and when promise resolved then that will print
    // here js will not wait for promise to be resolved first (this is )
}
getdata();


//^ IMP FACT
const p = new Promise((resolve,reject)=>{
    setTimeout(() => {
    throw console.error('API Request Failed');
    },3000);
})

async function handlePromise(){
    const val = await p;  // js immediately exits handlePromise() because no try/catch is there.
    console.log("Rakshit Pant");
    console.log(val);
}
handlePromise();
//* If the Promise rejects → the code after await DOES NOT run unless you use try/catch



// ! with async await;
const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
    resolve(" 1st Promise Resolved !")
    },6000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
    resolve(" 2nd Promise Resolved !")
    },2000);
})

async function handlePromise(){
    console.log("START");
    // js engine waits for promise to be resolved and will only go to next line once promise is resolved

    const val2 = await p2;   // this time as response is same (already resolved)
    console.log("Rakshit pant 2nd "); // IT WILL not print until promise is being resolved due to await
    console.log(val2);

    const val = await p1;  
    console.log("Rakshit pant 1st "); // IT WILL not print until promise is being resolved due to await
    console.log(val);

    console.log("END")

};
handlePromise();



//! CASE 1:
// 	•	START → prints immediately
// 	•	await p2 → waits 2 sec (p2 resolves) → prints Rakshit pant 2nd and its value
// 	•	await p1 → p1 started at t=0, 2 sec already passed, so remaining 4 sec → prints Rakshit pant 1st
// 	•	END → prints at the end

const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
    resolve(" 1st Promise Resolved !")
    },2000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
    resolve(" 2nd Promise Resolved !")
    },6000);
})

async function handlePromise(){
    console.log("START");
    // js engine waits for promise to be resolved and will only go to next line once promise is resolved

    const val2 = await p2;   // this time as response is same (already resolved)
    console.log("Rakshit pant 2nd "); // IT WILL not print until promise is being resolved due to await
    console.log(val2);

    const val = await p1;  
    console.log("Rakshit pant 1st "); // IT WILL not print until promise is being resolved due to await
    console.log(val);

    console.log("END")

};
handlePromise();

//! CASE 2
	// •	START → prints immediately
	// •	await p2 → waits 6 sec
	// •	After 6 sec, p2 resolves → prints Rakshit pant 2nd and its value
	// •	await p1 → p1 started at t=0, so 2 sec already passed → resolves immediately
	// •	Prints Rakshit pant 1st and its value
	// •	Prints END

//! VVI
	// 1.	await pauses the execution of the async function at that line until the Promise resolves or rejects.
	//    	It does not block the JS event loop; other code (timers, events, other async tasks) can continue running.
	
    // 2.	Promises start executing immediately when they are created, regardless of await.
	//   	So const p1 = new Promise(...) immediately starts the timer.
	//  	await only waits for its resolution, it does not start the timer.



const p1 = new Promise((resolve) => setTimeout(() => resolve("p1 done"), 2000));

async function FUNC() {
    console.log("START");

    await new Promise((r) => setTimeout(r, 3000)); // waits 3 sec
    console.log("After 3 sec");

    const val = await p1; // p1 started at t=0, 2 sec already passed
    console.log(val);      // resolves instantly because p1 is already done
}

FUNC();
//* await doesn’t “restart” the timer. It just waits if necessary; if the promise is already done, it continues immediately.