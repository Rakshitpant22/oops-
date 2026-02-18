// async function getusers(){
//    const response= await fetch('https://api.github.com/users/hiteshchoudhary')
//    const data= response.json();
//    console.log(data);
// }
// getusers();


// async function getusers1(){
//     try{
//         const response= await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data= await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log('error hai bhai chle ja')
//     }
//  }
//  getusers1();


fetch('https://api.github.com/users/hiteshchoudhary').
then((response)=>{
    return response.json();
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
console.log("E R R O R");
})
// agr sara code likha h to sabse pehle fetch vala ajaega but WHYYYYYY?;
