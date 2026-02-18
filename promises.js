//! PROMISES
// PROMISE object is a placeholder which will be filled later with a value(after asyncronous operation is done)

const cart=["phone","jeans","shirt"];

createorder(cart,function (){   // createorder is api which returns order id with proceedtopayment api as callback fn
    proceedtopayment(orderID);
})

//^  but callbacks has problems -> IOC(Inversion of control) 
// simply jab ek function ka kaam hum kisi callback se krvata ha to pura control callback ko dedete ha 
// but sometimes callback functions don't ideally do tasks /(are faulty) so there must be a check in these cases

// so we would create a promise that is required form create order api
const promise = createorder(cart); // this returns a promise object initially undefined & when promise is done its filled with exact data(orderID) fulfilled state
promise.then( function cb(orderID){ // once promise object has data (atatching  callback funtion to promsie object)
    proceedtopayment(orderID);
})

//! The data of promise object is immutable (can be passed only)
const api="https://leetcode.com/u/rakshit2003/";
const user = fetch(api); //fetch returns a promise
console.log(user);

//^ 

//! IMP STUFF
// JS has only one main thread

// JS doesn’t run multiple pieces of code at the same time on that thread —
// it just manages tasks through queues and executes them in turns.

//! Event Loop keeps cycling like this: PRIORITY:
//      Run → all synchronous code first
//      ↓
//      Then run all microtasks (Promises,await..)
//      ↓
//      Then pick one macrotask (like setTimeout, setInterval, fetch callbacks, I/O)
//      ↓
//      Repeat forever



//^ PROMISE API'S

//! Promise.all()
// Waits for ALL promises to resolve.
// Rejects immediately if ANY promise fails.

const allExample = () => {
  const p1 = Promise.resolve(10);
  const p2 = Promise.resolve(20);
  const p3 = Promise.resolve(30);

  Promise.all([p1, p2, p3])
    .then(values => console.log("Promise.all →", values)) // [10, 20, 30]
    .catch(err => console.error("Promise.all Error →", err));
};

//! Promise.allSettled()
// Waits for all promises regardless of success/failure.
// Returns an array of result objects.

const allSettledExample = () => {
  const p1 = Promise.resolve("✅ success");
  const p2 = Promise.reject("❌ failed");

  Promise.allSettled([p1, p2]).then(results => {
    console.log("Promise.allSettled →", results);
  });
};

//!  Promise.race()
// Returns the FIRST promise to settle (resolve or reject).

const raceExample = () => {
  const p1 = new Promise(res => setTimeout(res, 100, "Slow"));
  const p2 = new Promise(res => setTimeout(res, 50, "Fast"));

  Promise.race([p1, p2]).then(result => console.log("Promise.race →", result)); // "Fast"
};

//! Promise.any()
// Returns the FIRST fulfilled (resolved) promise.
// Ignores rejections unless ALL fail.

const anyExample = () => {
  const p1 = Promise.reject("fail 1");
  const p2 = Promise.resolve("success 1");
  const p3 = Promise.reject("fail 2");

  Promise.any([p1, p2, p3])
    .then(result => console.log("Promise.any →", result)) // "success 1"
    .catch(err => console.log("Promise.any Error →", err.errors)); // Only if all fail
};

//! Promise.resolve() / Promise.reject()
// Instantly creates resolved/rejected promises.

const resolveRejectExample = () => {
  Promise.resolve("Instant Success").then(val => console.log("Promise.resolve →", val));
  Promise.reject("Instant Failure").catch(err => console.log("Promise.reject →", err));
};

// 🧩 Summary Notes:

// Promise.all()       → Waits for all, fails fast on reject
// Promise.allSettled()→ Waits for all, returns status/value
// Promise.race()      → First settled (resolve or reject)
// Promise.any()       → First fulfilled (ignores rejections)
// Promise.resolve()   → Creates an instantly resolved promise
// Promise.reject()    → Creates an instantly rejected promise
// ============================== 

