// const number = [1,2,3,4,5];
// number.map((item ,index ,array)=>{
//   return item + 5;
// });
//  number.filter((item ,index ,array)=>{
// return item > 3;
// });
// const sum = number.reduce((prev,item)=>{
// return item + prev;
// },4);
// console.log(sum);


// const num = [1,2,3,4,5];
// const num2 = [2,3,4,5,66];
// const finalarr = [...num,...num2];
// console.log(finalarr);

// let arr = [1,2,3,4,5];
// let temp = arr[0];
// for(let i =0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] =temp;

// console.log(arr);

// let arr = [1,3,3,4,5,6];
// let max = arr[0];
// for(let i=1;i<arr.length-1;i++){
//     if(arr[i] > max){
//        max = arr[i];
//     }
// }
// console.log(max);


// Array should be shorted
// let arr = [1,2,3,5];
// let sum=0,a,finalans;

// let n = arr[arr.length-1];
// for(let i=0;i<arr.length;i++){
//    sum += arr[i];
//    a = (n*(n+1)) /2;
  
// }
// finalans = Number(a - sum) ;
// console.log( " Missing number is " + finalans);

// let arr = [ 0, 1,2,3,4,5,68];
// let min = arr[0];
// for(let i=0;i<arr.length;i++){
//    if(arr[i] < min){
//       min  = arr[i];
//    }
// }
// console.log(min);

// let arr = [1,2,3,4,5,6,7,7];
// let max = Math.max(arr[0],arr[1]);
// let Smax = Math.min(arr[0],arr[1]);
// for(let i=2;i<arr.length;i++){
//    if(arr[i]>max){
//       Smax = max;
//       max = arr[i];
//    }
//    else if(arr[i]>Smax && arr[i] != max){
//       Smax = arr[i];
//    }
   
// }
// console.log(Smax);



// let arr = [1,2,3,4,5];
// let min = Math.min(arr[0],arr[1]);
// let Smin = Math.max(arr[0],arr[1]);
// for(let i=2;i<arr.length;i++){
//    if(arr[i]< min){
//        Smin = min;
//        min = arr[i]
//    }
//   else if(arr[i] < Smin && arr[i] != min){
//    Smin = arr[i];
//   }   
// }
// console.log(Smin);
 

// let arr = [1,2,3,4,5];
// let i=0;
// let j = arr.length-1;
// while(i<j){
//    let temp = arr[i];
//    arr[i] = arr[j];
//    arr[j] = temp;
//    i++;
//    j--;
// }
// console.log(arr);
 

// let arr = [1,0,0,1,0,1,0,1,0];
// let i=0,j=0;
// while(i<arr.length){
//    if(arr[i]==0){
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//       j++;
//    }
//    i++;
// }
// console.log(arr);

  

// let arr = [1,2,3,45,67,8];
// let temp = arr[0];
// for(let i=0;i<arr.length-1;i++){
//    arr[i] = arr[i+1];
// }
// arr[arr.length-1] = temp;
// console.log(arr);

let arr = [1,2,3,45,67,8];
let temp = arr[arr.length-1];
for(let i=arr.length-1;i>0;i--){
   arr[i] = arr[i-1];
}
arr[0] = temp;
console.log(arr);



