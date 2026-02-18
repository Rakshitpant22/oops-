// function and andr function built krne se this ki problem ajati h 
// bcs call stack m information jati hai to this detect nhi kr pata ki ye this main function ka hai ya function k ander vale
// ka hai

// browser m simple this window object ko refer krta h 
// and node me ye global execution context ko refer krta ha (agr global define nhi hai to ye empty object return krta hai)

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
function createUser(username, email, password){
    SetUsername.call(this,username) //CALL-> current execution context kisi or ko pass krta ha
    //this.username = username
    this.email = email
    this.password = password
}
const x= new createUser("rakshit","fdjdj@.com","123")
console.log(x);
