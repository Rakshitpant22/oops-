let arr = [0,3,0,6,0,8];
//! reverse arr without changing position of 0's
let i=0;
let j=arr.length-1;

while(i<=j){
     if(arr[i]===0){
        i++;
    }
    else if(arr[j]===0){
        j--;
    }
    else{
        [arr[i],arr[j]]=[arr[j],arr[i]];
        i++;j--;
    }
}
console.log(arr);


//! sort array obj as per names
let arr = [
    { id: 1, name: "lvl 4" },
    { id: 4, name: "lvl 2" },
    { id: 5, name: "lvl 6" },
    { id: 3, name: "lvl 5" },
    { id: 2, name: "lvl 1" },
    { id: 6, name: "lvl 3" },
]
arr.sort((a,b)=> a.name.localeCompare(b.name));
console.log(arr);


//! remove duplicate without changing sequence
const arr = [4,2,3,6,1,2,76,5,4,3,7,5,3,1,2,6,7]
const ans=[];
let mpp= new Map();

for(let i=0;i<arr.length;i++){
if(!mpp.has(arr[i])){
    mpp.set(arr[i],mpp.get(arr[i])|| 0 +1);
    ans.push(arr[i]);
}
}
// for( let [key,value] of mpp){
//     console.log(key," - ",value,"\n");
// }

console.log(ans)
