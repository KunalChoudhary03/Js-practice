// var a = document.querySelector('h1')
// a.innerHTML = "hello";

//  let b = document.querySelector('h1');
//  b.style.color = "red";
//  b.style.backgroundColor = "pink";

//  b.addEventListener("click",function(){
//     b.innerHTML = "kyo dabaya bhai";
//     b.style.color =  "pink";
//     b.style.backgroundColor =  "red";
//  })

//  let c = document.querySelectorAll("h1");
//  c[0].innerHTML = "changed";
//  c[0].style.color = "red";

// let box = document.querySelector("#box");
// box.textContent = "changed";
// box.innerHTML = "<h1>changed</h1>";



//  let button = document.querySelector('button');
//  let box = document.querySelector('#box');
//  let flag =0;
//  button.addEventListener("click",function(){
//     if(flag ===0){
//      box.style.backgroundColor = "red";
//      flag = 1;
//     }
//     else{
//         box.style.backgroundColor = "cadetblue";
//         flag =0;
//     }
//  })


//  let button = document.querySelector('button');
//  let box = document.querySelector('#box');
// function changed(){
//     console.log("funciton is running");
//     box.innerHTML = "kunal";
//     box.style.backgroundColor = "red";
// }
// button.addEventListener("click",changed);

let button = document.querySelector("button");
let flage = 0;
let h5 =  document.querySelector("h5");
button.addEventListener("click",function(){
    if(flage === 0){
        button.textContent = "Remove Friend";
        h5.textContent = "Friend";
        flage = 1;
    }
    else{
        button.textContent = "Add friend ";
        h5.textContent = "Stranger";
        flage = 0;
    }
   
})