const accountId = 13443    // change nhi kr skte 

let accountemail="raks@gmail.com";//can change
var accountpass="22022003" // can change
accountcity="jaipur"// if datatype not mentioned --> js treats as variable

// accountId=13342
accountemail="dhd@gmail.com"
accountcity="delhi" 
accountpass="133223"

//! js me variable ko var or let dono s define kr skte hai
//! in js var faces issue bcs of block scope 
  // so we use 'let' insted of var

// agr variable ko kuch assign ni kia to js usko undefined maanti hai
 console.log(accountemail);
//! for printing in table form use console.table;
//console.table([accountId,accountemail,accountpass,accountcity])
// const score = 400
 // console.log(score);

// const balance = new Number(100)
 // console.log(balance);

 // console.log(balance.toString().length);
//  console.log(balance.toFixed(1));

// const otherNumber = 123.8966

//  console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);