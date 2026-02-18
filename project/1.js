const buttons= document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id=='grey'){
            body.style.backgroundColor='grey'
        }
        if(e.target.id=='orange'){
            body.style.backgroundColor='orange'
        } 
        if(e.target.id=='white'){
            body.style.backgroundColor='white'
        } 
        if(e.target.id=='yellow'){
            body.style.backgroundColor='yellow'
        }
    })
})

var arr=["Jazz", "Blues"];
arr.push("Rock-n-Roll");
let mid = (arr.length/2);
console.log(mid);
mid=Math.floor(mid);
arr[mid]="Classics";
arr.shift();
arr.unshift("Rap","Reggae");
console.log(arr);
