//Arrays
var arr=[["john",3],["jane",4],["susan",5]];
console.table(arr);

arr.shift(); //! remove first element
console.table(arr);

arr.unshift(["rakshit",22]); // same as push but add element in starting
console.table(arr);


let a=[1,4,5];
console.log(a+2); //if array is added to number it converts array to string and then concatenate
console.log(a*2); // if array is multiplied by number it converts array to string and then multiply ["1,2,3"] which is NaN
console.log(a); // original array is not changed

let b=[1,2,3];
let c=[4,5,6];
console.log(b+c);

//! in js we always use === and !== for comparison instead of == and !=
a=[];
b=0;
console.log(a==b); // strange! it gives true
console.log(a===b);




//^ ARRAY methods
arr= [1,3,4,5,4,45,3];
console.log(arr.indexOf(4,3)); //! arr.indexOf(x,y) ->search for x starting from index y
console.log(arr.lastIndexOf(4)); //! search from last
console.log(arr.indexOf(4)); //! search from fromt and if not found returns -1
console.log(arr.includes(3)); //! return true if present else false 
console.log(Array.isArray(arr)); //! check if arr is array or not


//! arr.slice(x,y) -> return new array from index x to y-1
console.log(arr.slice(2,5));
console.log(arr.slice(2)); // if y not given then it will go to end of array
console.log(arr.slice(-4,-1)); // negative indexing

//! arr.splice(x,y,z..) -> starting from index x remove y elements and add z in place of them
arr= [1,3,4,5,4,45,3];
console.log(arr);
console.log(arr.splice(2,3,99,100,101));
console.log(arr);

//! arr.find()-> if we have an array of objects. How do we find an object with a specific condition? 
//! arr.findIndex() -> returns the index of the first element that satisfies the condition.
//! arr.lastIndexOf() -> returns the index of the last element that satisfies the condition. works for primitive values not for objects
// ! arr.findLastIndex() -> returns the index of the last element that satisfies the condition. 
let users = [
    {id:1, name:"rakshit"},
    {id:2, name:"rahul"},
    {id:3, name:"rohit"},
    {id:5, name:"rajat"},
    {id:4, name:"rajat"},
]
let user1=users.find(item => item.id==1); // return the first element that satisfies the condition
console.log(typeof(user1),user1);
console.log(user1.name);

let user2=users.find(item=>item.name=="rajat");
console.log(user2.id);

let query=users.findIndex(item => item.name=="rajat");
console.log(query); 

let query2=users.lastIndexOf(item => item.name=="rajat"); 
//* Return -1 As lastIndexOf works for primitive values not for objects
console.log(query2); 

let query3=users.findLastIndex(item => item.name=="rajat");
console.log(query3);

//! important
let arrr = ["a", "b", "c", "b"];
//console.log(arrr.findLastIndex("b")); // THIS WILL NOT WORK AS ITS APPLICABLE FOR OBJECTS ONLY
//* findLastIndex works with a callback function, not a direct value.
console.log(arrr.lastIndexOf("b")); // FOR PRIMTIVE use (lastIndexOf)


//^ FILTER 
// SAME AS FIND - but find gives object of first match only for multiple matches use filter
// give object as ans
let users = [
    {id:1, name:"rakshit"},
    {id:2, name:"rahul"},
    {id:3, name:"rohit"},
    {id:5, name:"rajat"},
    {id:4, name:"rajat"},
    {id:6, name:"rajat"},
]
let mulusers=users.filter(item => item.name=="rajat");
console.log(typeof(mulusers));
console.log(mulusers); 
let size=mulusers.length;
for(let i of mulusers){
    console.log("id:",i.id ,"name:",i.name);
}


//^ MAP
// it creates a new array by performing a function on each array element
let arr=[1,2,3,4,5];
function double(x){
  return 2*x;
}

// all do same thing
console.log(arr.map((item)=> item*2)); 
console.log(arr.map(double));   // same as above just passing function name
console.log(arr.map(function solve(x){
  return 2*x;
})); 
console.log(arr.map((x) => {
  return 2*x;
}
));

const original = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = original.map(({ key, value }) => ({ [key]: value }));
console.log(original);
console.log(reformattedArray); 

//^ forEach
// it calls a function for each element of array
arr = [1, 4, 9];
arr.forEach((item, index, array) => {
    console.log(item, index, array);
});


console.log(typeof(2)); 
const prompt = require("prompt-sync")(); // ye nodejs m prompt lene k lie use hota h browser m nhi chlega BROWSER m prompt by default hota h

function solve(){
    let arr = [];
    while(true){
      // in js prompt always return a string
        let x=prompt("Enter a number: ");
        if(x==="" || x===null || isNaN(Number(x))) break; // if user press cancel or enter nothing then break
        // now validate if true then convert string to number 
        else{
        x=Number(x); //! convert string to number CAN BE DON VIA +x also
        arr.push(x);
        }
   let ans=0;
   for(let i of arr){
    ans+=i;
   }
    return ans;
}
}
console.log(solve());



//^ REDUCE
// it reduces the array to a single value by performing a function on each array element
let arr=[1,2,3,4,5];
const sum=arr.reduce((accumulator,item) => accumulator+item,0);
const product=arr.reduce((accumulator,item) => accumulator*item,1); // 1 is initial value of accumulator


console.log("Sum:",sum); 
console.log("Product:",product);
console.log(arr); // original array is not changed


//^ MAP 
let map= new Map(); // create

mpp.push(key,value);// push
mpp.get(key) //get the value of the key
mpp.set(key,mpp.get(key)+1) // update value of key

mpp.has(key) // find whether key present or not
mpp.delete(key);

for(let [key,value] of mpp){ //iterate map
console.log(key,value,"\n");
}