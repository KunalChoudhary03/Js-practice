// function getUserInfo(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//              res({id:1,name:"kunal"});
//         }, 2000);
 
//     });
// }
// function getUserPics(id){
//     return new Promise(function(res,rej){
//         setTimeout(() => {
//             res(["pics1","pics2"]);
//         }, 1000);
//     });
// }
// getUserInfo().then((data)=>{
//     console.log(data);
//     return getUserPics(data.id);
// })
// .then((data)=>{
//     console.log(data);
    
// })

// fetch("https://api.github.com/users/asynchronousJavascriptor")
// .then(res => res.json())
// .then(data => console.log(data));

//  document.querySelector("button")
// .addEventListener("click",function(){
// fetch("https://api.github.com/users/asynchronousJavascriptor")
// .then(res => res.json())
// .then(data => console.log(data))
// })


// function getUserInfo(username){
// return fetch(`https://api.github.com/users/${username}`)
// .then((raw)=>{
// return raw.json();
// });
// }
// getUserInfo("async").then((data)=>{
// console.log(data);
// })