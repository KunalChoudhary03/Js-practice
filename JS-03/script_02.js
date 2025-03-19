// let userInput;
// do{
//     console.log('hello world');
//     userInput = prompt("aap continue chate h.. kya yes /no").toLowerCase();
// } while(userInput === 'yes');


// let com  = Math.floor(Math.random()*100)+1;
// let userInput;
// do{
//     userInput = Number(prompt("guess the number in b/w 1 top 100"));
//     if(isNaN(userInput) || userInput<0 || userInput>100){
//         console.log('please enter a valid number');
//         continue
//     }
//     if(userInput>com)console.log("too high,try again");
//     else if(userInput<com)console.log("too low ,try again");
//     else console.log("congrate and number was " + com);
// }while(userInput !== com);

let userInput;
do{
    let num1 =Number( prompt("Enter a first number"));
    let num2 =Number( prompt("Enter a second number"));
    let operatore = prompt("Enter valid operator(+,-,*,/");
    switch(operatore){
        case '+':
            console.log("result" + (num1 + num2));
            break;
        case '-':
            console.log("result" + (num1 - num2));
            break;
        case '*':
            console.log("result" + (num1 * num2));
            break;
        case '/':
            if(num2 !==0)
            console.log("result" + (num1 / num2));
        else
            console.log('please enter a valid number');
            break;
            default:
                console.log('please enter a valid operatore');
      
            
    }
    userInput = prompt("you want to run second time or not").toLowerCase();
}while(userInput === 'yes');

// const prompt  = require("prompt-sync")();
// let n = prompt("Enter a number");
// let copy = n
// let ans = 0;
// while(n>0){
//     let  dig = n % 10;
//     let fact = 1;
//     for(let i=1;i<=dig;i++){
//         fact = fact *i;
// }
// ans += fact;
// n = Math.floor(n/10);
// }
// if(copy ==ans){
//     console.log("strong number");
// }
// else{
//     console.log('not strong number');
    
// }

let prompt = require("prompt-sync")();
let size  = Number(prompt("Enter array's size"));
let arr = new Array(size);
let sum = 0;
for(let i = 0; i<arr.length;i++){
  arr[i] = Number(prompt("Enter element"));
  sum = sum + arr[i];
  max = arr[0];
  if(arr[i]> max){
    max = arr[i]
  }
  
}
console.log(max);

console.log("Sum " + sum);
