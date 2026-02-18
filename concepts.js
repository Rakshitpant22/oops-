// Everything in js happens inside an execution context which contains variable environment(memory component) and thread of execution(code component)
// variable environment contains variable and function declarations
// thread of execution contains the code that is currently being executed
// all the execution context are managed by call stack

// for a js program all variables or functions ko memory m store krta h (creation phase)
// fir code ko line by line execute krta h (execution phase)
// agr variable ko kuch assign ni kia to js usko undefined maanti hai(even before the execution phase starts)
// agr function ko call krte hai to js pura function ko memory m store krta h


// everything in js is executed through a single call stack
// so if a function takes time to execute then it will block the call stack (As js is single thread language )
// so to avoid blocking of call stack we use asynchronous programming
// asynchronous programming is a programming paradigm that allows a program to do more than one thing at a time
// with the help of callback functions and event loop we can achieve asynchronous behaviour in js

//~ When you run a JS program, it happens in two phases inside the Execution Context (for every scope).
//! 1). Memory Creation Phase /(hoisting phase)
// • The JS engine scans your code first (before execution).
// • It allocates memory for all:
	// • var variables → initialized as undefined
	// • function declarations → full function code stored
	// • let and const variables → allocated but not initialized (in Temporal Dead Zone)

//! 2). Execution Phase (Code Execution Phase)
//  Now the code runs line by line:
// 	• When the JS engine reaches each line, it assigns actual values to variables.
// 	• Function calls create new execution contexts (each has its own memory + execution phase).

console.log(a);   // undefined (var hoisted)
console.log(b);   // ❌ ReferenceError (TDZ)
test();           // ✅ works (function hoisted)

var a = 10;
let b = 20;

function test() {
  console.log("Function called!");
}



setTimeout(function() {
console.log("Hello, timer!");
}, 3000);

function x(y){
console.log("x");
y();
}

x (function y(){
console.log("y");
});


// Example of objects in js
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1" : "USA",
  "another code": "turkey",
  sd: "england"
};
for (let code in codes) {
  console.log(code , codes[code]); 
}

let a ="41";
codes.a="INDIA"; // . operator always works with simple variable name not with " "; // if present as normal it would update otherwise add new key value pair
console.log(codes); 

codes[a]="India"; 
console.log(codes);

codes.sd="Wales";
console.log(codes);



//! HOISTING
// Hoisting -> in js all the variable and function declarations are moved to the top of their scope before the code is executed
// Hoisting is possible due the two phases of execution context creation and execution

console.log(getName());  // function call before declaration is possible bcs of hoisting
console.log(x); // undefined bcs variable is hoisted but not its value
console.log(getName); // it will print the function definition bcs of hoisting as in memory content the function is stored

var x=7; 
function getName(){
    console.log("Hello World");
}
//temporal dead zone is the time period between the hoisting and the actual declaration of the variable

//* But if we used Arrow function then it will give error as arrow function is stored as variable and variable is undefined at this point
getName();  // as variable is undefined at this point it will give error
console.log(x);

var x=7; 
var  getName = () => {
    console.log("Hello World");
}
//* so for only function declaration js stores whole code in memory but for arrow function it stores as variable and variable is undefined at this point

// let / const
// 	•	They are also hoisted, but they live in the Temporal Dead Zone (TDZ) until execution reaches the declaration line.
// 	•	❌ You cannot access them before initialization — if you do, you get a ReferenceError.

// call stack 
var x=1;
a(); // 10 bcs call stack creates another executuon context with its variabes and code 
b();
console.log(x); // 1 . bcs global execution context m x ki value 1 h

function a(){
    var x=10;
    console.log(x); // 10
}
function b(){
    var x=100;
    console.log(x); // 100
}

function func(num){
if(num==3)console.log("true"); // only value check (== makes type conversion and then compare)
else if(num===3)console.log("TRUE"); 
else if(num==='3')console.log("TRUE"); //type and value both check 
else console.log("FALSE");
}
func('3');
func(3);
func("3");
// in js in case of == 	
// Number vs String → String is converted to Number.
// Boolean vs Anything → Boolean is converted to Number (true → 1, false → 0).
// Object vs Primitive (string/number/boolean) → Object is converted to Primitive (toString or valueOf).


//! CLOSURES
// simple terms - a closure is a function bundled with its lexical scope.
// A closure is a function that has access to its own scope, the outer function's scope, and the global scope

function x(){
    var a=7;
    function y(){ // here y is a closure because it has access to its own scope and outer function's scope
        console.log(a);
    }
    return y;               
}
var z = x();
console.log(z);
z(); // it will print 7 bcs of closure (y function has access to its own scope and outer function's scope)


//example:
function outer(){
    let count=0;
    function inner(){
        count++;
        return count;
    }
    return inner;       
}
const c = outer();
console.log(c); // it will print the function definition bcs outer function returns the inner function
console.log(c());
console.log(c());
console.log(c());
//* A new execution context is created for inner() each time,
//* but it always uses the SAME closure environment created by outer(), so count persists.

//! important example of closure and asynchronous programming
function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000)
    }       
    console.log("Namaste");
}
x(); // it will print 6 five times bcs by the time setTimeout executes the loop is already completed and i=6
// ye closure ki vjeh se hua kyuki js dont wait for setTimeout to complete it just register the callback function and move ahead
// so by the time setTimeout executes the loop is already completed and i=6

// solution 1 - using let as it has block scope
// solution 2 - using IIFE (Immediately Invoked Function Expression)

function y(){
    for(var i=1;i<=5;i++){
        function close(num){
            setTimeout(function(){
                console.log(num);
            },num*1000);
        }
        close(i); // IIFE (Immediately Invoked Function Expression)       
    }       
    console.log("Namaste");
}
y(); // it will print 1,2,3,4,5 bcs of IIFE (it creates a new scope for each iteration and i is passed as an argument to the IIFE)
 


//! the web browsers have js engine which run js scripts infact setTimeout ,fetch, DOM manipulation is done by web APIs provided by the browser
// In a web browser, window is the global object for JavaScript.In browsers, (window is the global namespace object that gives you access to Web APIs).

// Event loop constantly monitors both the call stack and the callback queue.
// If the call stack is empty, it takes the first event from the callback queue and pushes it to the call stack, which effectively runs it.
// This is how asynchronous callbacks are executed in JavaScript.

// Microtask queue has higher priority than callback queue(ex fetch requests)
// So when the call stack is empty, the event loop first checks the microtask queue and processes all the tasks in it before moving to the callback queue.



//! Higher order functions (HOF)
// A Higher-Order Function is a function that either:
	// 1.	Takes another function as an argument, or
	// 2.	Returns a function as a result (or both).

// Example of higher order function - map, filter, reduce, forEach, setTimeout, setInterval

// ! Callback functions- are the functions which are passed as an argiment to another function 
function higherOrder(fn) {   // HOF
  console.log("Inside HOF");
  fn();  // calling the callback
}
function sayHi() {           // callback function
  console.log("Hello!");
}
higherOrder(sayHi); // sayHi is passed as callback


//& JS in syncronous and single threaded but it can be made asyncronous using callbacks and setimeout
setTimeout(function cb(){ // here function cb is callback as its passed as argument to se setTimeout
console.log("first");
},2000)
console.log("second");


 // Example:
 const radius = [3,1,2,4];

 const area = function(radius){
    return Math.floor(Math.PI * radius * radius);
 }
 const circumference = function(radius){
    return Math.floor(2 * Math.PI * radius);
 }; 
 const diameter = function(radius){
    return Math.floor(2 * radius);
 };

 const calculate = function(radius,logic){ // passing logic as function (HOF)
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
 }

 console.log(calculate(radius,area));
 console.log(radius.map(item => area(item))); // same as calculate(radius,area) but using map
 
 console.log(calculate(radius,circumference));
 console.log(calculate(radius,diameter));   