// console.log('hello');
// setTimeout(function(){
//     console.log("hello1");
    
// },3000);
// console.log('hello3');


// console.log("hello1");
// setTimeout(function(){
//     console.log('hello3');
    
// },0);
// Promise.resolve().then(function(){
//     console.log("hello 2");
    
// });
// console.log("hello4");

// function abcd(cb){
// cb();
// }
// abcd(function(){
//     console.log('hello');
    
// })

// setTimeout(() => {
//     console.log("kunal");
// }, 1000);


// function getDetails(username,cb){
// setTimeout(() => {
//     console.log("sending request to instagram ...");
// }, 1000);
// setTimeout(() => {
//     console.log('fetching data..');
// }, 3000);
// setTimeout(() => {
//     cb();
// }, 4000);
// }
// getDetails("kunal",function(){
// console.log("data saved in gallery");

// })


// callback hell
// function stepOne(cb){
// console.log('step1');
// cb();
// }
// function stepTwo(cb){
// console.log('step2');
// cb();
// }
// function stepThree(cb){
// console.log('step 3');
// cb();
// }
// stepOne(()=>{
//     stepTwo(()=>{
// stepThree(()=>{
//     console.log('all callbacks called');
    
// })
//     });
// });

// const pr = new Promise(function(res,rej){
//     console.log("Data retrive");
//     console.log('collect data');
//    console.log("error");
//    res();
// }) 
// pr.then(function(){
//     console.log("resolved");
    
// }).catch(function(){
//     console.log('rejected');
    
// })

function stepOne(cb){
    return new Promise(function(res,rej){
        console.log('step1');
res();
    })

}
function stepTwo(cb){
 return new Promise(function(res,rej){
        console.log('step2');
res();
    })

}
function stepThree(cb){
return new Promise(function(res,rej){
        console.log('step3');
res();
    })
}

stepOne()
.then(stepTwo)
.then(stepThree)
.then(function(){
    console.log('all steps done');

});