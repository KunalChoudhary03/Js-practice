// callback function
// function callerfun(fn){
//     setTimeout(fn, 3000);
// }
// callerfun(function(){
//   console.log('kunal');
// })

//  var arr = [1,2,3,4,5,6];
//  function hap(array,fn){
//   var newarr = [];
//   for(let i=0;i<arr.length;i++){
//     newarr.push(fn(arr[i]));
//   }
//   return newarr;
//  }
//  var ans =  hap(arr, function(value){
//     return value+2;
//  })
//  console.log(ans);
 
// function counter(){
//     let counte = 0 ;
//     return function(){
//         counte++;
//         console.log(counte);
//     }
// }
// var fn =counter();
// fn();
// fn();
// fn();
// fn();


// function counter(){
//     let counte = 0 ;
//     return function(){
//         counte++;
//         console.log(counte);
//     }
// }
// counter()();
// counter()();
// counter()();

// function  abc(fn,limit){
//     let totalcalled = 0;
// return function(){
//   if(totalcalled <limit){
//     totalcalled++;
//     fn();
//   }
//   else{
//     console.error('Limit reached');
    
//   }
// }
// }
// let fn = abc(function(){
// console.log("kunal");

// },3);
// fn();
// fn();
// fn();
// fn();