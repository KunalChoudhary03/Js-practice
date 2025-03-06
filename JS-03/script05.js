// function  a(fn,time){
//     setInterval(fn,time);
// }
// a(function(){
//     console.log('hello');
    
// },2000)

// function abc(ss){
//     return function(name){
// console.log(`${ss} ${name}`);
//     };
// }
//  var a = abc("HELLO");
//  a("kunal");
//  a("kunall");
//  var sapnish = abc("hola!");
//  sapnish("Kunal");

// function greetSetup(greeting){
//     return function(name){
// console.log(`${greeting} ${name}`);

//     }
// }
// var greeter = greetSetup("Namaste");
// greeter("Harsh");
// var spanish = greetSetup("Hola!");
// spanish("kunal");


// function abcd(cb){
// let executed = false;
// return function(){
//     if(!executed){
//         executed =true;
//         cb();
//     }
//     else{
//         console.error('alreay executed');
        
//     }
// };
// }
//  var newfun = abcd(function(){
// console.log('ran');

// })
// newfun();
// newfun();
// newfun();

function throt(fn,delay){
    let lastCall = 0;
    return function(){
  let currnet  = Date.now();
  if(currnet - lastCall >= delay){
    lastCall = currnet;
    fn();
  }
}
}
var newfnc = throt(function(){
    console.log('will run in 2seconds');
    
},2000)
newfnc();