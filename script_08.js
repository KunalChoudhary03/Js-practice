// let arr = [[1,2,3,4],[4,5,6,10],[7,8,9,1]];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//     process.stdout.write(arr[i][j] + " ");
//     }
//     console.log();
    
// }


// let prompt = require("prompt-sync")();
// let size = Number(prompt("Enter  array size"));
// let innerArraySize = Number(prompt("Enter inner array size"));
// let arr = new Array(size);
// for(let i=0;i<arr.length;i++){
   
//     arr[i] = new Array(innerArraySize);
// }
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         arr[i][j] = Number(prompt("Enter element"));
//     }
// }
// console.log(arr);

// let arr = [
//     [[1,2,3],[1,2,3],[1,6,78]],
//     [[1,2,3],[1,2,3],[1,6,78]],
//     [[1,2,3],[1,2,3],[1,6,78]],
// ]
// console.log(arr);

// let arr = [
//     [1,2,3],
//     [3,5,6],
//     [7,8,9]
// ]
// let leftSum = 0,rigthSum =0;
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         if(i == j){
//             leftSum += arr[i][j];
//         }
//         if(i+j == arr.length-1){
//             rigthSum += arr[i][j];
//         }
//     }
// }
// console.log("leftSum = ",leftSum);  
// console.log('RightSum = ',rigthSum);


// let prompt = require("prompt-sync")();
// let arr = new Array(4);
// for(let i=0;i<arr.length;i++) {
//     let size = Number(prompt("inner array's size"));
//     arr[i] = new Array(size);
// }
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         arr[i][j] = Number(prompt("Enter Array element"));
//     }
// }
// for(let i=0;i<arr.length;i++){

//     console.log(arr[i]);
// }


// let arr = Array.from({length:3},()=>Array(4).fill(0));
// console.log(arr);
