// let btn = document.querySelector('button');
// let box  = document.querySelector("#box");

// btn.addEventListener("click",function(){
//     let c1 = Math.floor(Math.random()*256);
//     let c2 = Math.floor(Math.random()*256);
//     let c3 = Math.floor(Math.random()*256);
   
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
// })

// let arr = ["CSK","MI","RCB" ,"RR", "DC", "LSG" ,"GT", "PBKS","KKR","SRH"];
// let btn = document.querySelector('button');
// let h1 = document.querySelector("h1");
// btn.addEventListener("click",function(){
//    let num =  Math.floor(Math.random ()*arr.length);
//    let winner = arr[num];
//    h1.innerHTML = winner;

// })

let arr = [{
    team : "CSK",
    primary : "yellow",
    secondary : "green"
},
{
    team : "RCB",
    primary : "Red",
    secondary : "balck"
},
{
    team : "MI",
    primary : "blue",
    secondary : "gold"
},
{
    team : "Srk",
    primary : "orange",
    secondary : "yellow"
},
{
    team : "KKR",
    primary : "Purple",
    secondary : "black"
},]

let btn = document.querySelector("button");
let h1 = document.querySelector('h1');
btn.addEventListener("click",function(){
    let num = Math.floor(Math.random()*arr.length);
   let  winner = arr[num]; 
   
h1.innerHTML = winner.team;
h1.style.backgroundColor = winner.primary;
h1.style.color = winner.secondary;

}
)


