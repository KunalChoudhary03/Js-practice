// let arr = [1,2,3,4,5,6];
// let k = 2;
// k = k % arr.length;
// for(let j=1;j<=k;j++){
//     let copy  = arr[0];
//     for(let i=0;i<arr.length-1;i++){
//         arr[i] = arr[i+1];
//     }
//     arr[arr.length-1] = copy;
// }
// console.log(arr);

// let arr = [1,2,3,4,5,6,7];
// let temp = new Array(arr.length)
// let k = 3;
// k = k % arr.length;
// for(let i=0;i<arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length];
// }
// console.log(temp);


// let prompt = require('prompt-sync')();
// let arr = [1,2,3,4,5,6];
// let k = Number(prompt("Enter a number"));
// k = k%arr.length;
// reverse(arr,0,k-1)
// reverse(arr,k,arr.length-1)
// reverse(arr, 0,arr.length-1);
// console.log(arr);

// function reverse(arr,i,j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i]  = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }


// let prompt = require("prompt-sync")();
// let arr= [1,2,3,4,5,6,7];
// let num =Number(prompt("Enter the number"));
// let index = -1; 
// for(let i=0;i<arr.length;i++){
// if(arr[i] == num){
//     index =i;
//     break;
// }
// }
// if(index == -1){
//     console.log("Element not found");
// }
// else{
//     console.log("Element found at"+ index + "index");
// }

// Binary Search

let arr = [10,45,67,69,70,190,200];
if(binarySearch(arr,23)=== -1)console.log('not found');
else console.log('element found');

function binarySearch(arr,target){
    let s = 0, e=arr.length-1;
    while(s<=e){
  let mid  = Math.floor((s+e)/2);
  if(arr[mid]== target){
return mid;
  }
  else if(arr[mid]>target) e = mid-1;
  else s =mid +1;
    }
    return -1;
}

