// Bubble sort
// let arr = [2,4,12,6,7,98,0];
// let n = arr.length
// for(let i =0;i<n-1;i++){
//     for(let j=0;j<n-i-1;j++){
//         if(arr[j]> arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     } 
// }
// console.log(arr);



// let arr = [2,3,45,6,7,21,4,5];
// for(let i=0;i<arr.length-1;i++){
//     let small = i;
//     for(let j = i+1;j<arr.length;j++){
//         if(arr[small]> arr[j]){
//             small = j;
//         }
//     }
//     if(i != small){
//         let temp = arr[i];
//         arr[i] = arr[small];
//         arr[small] = temp;
//     } 
// }
// console.log(arr);



// let arr  = [1,23,4,67,4,56]
// for(let i=1;i<arr.length;i++){
//     let key = arr[i]
//     let j =i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = key;
// }
// console.log(arr);

// Binary Search

// let arr = [10,45,67,69,70,190,200];
// if(binarySearch(arr,23)=== -1)console.log('not found');
// else console.log('element found');

// function binarySearch(arr,target){
//     let s = 0, e=arr.length-1;
//     while(s<=e){
//   let mid  = Math.floor((s+e)/2);
//   if(arr[mid]== target){
// return mid;
//   }
//   else if(arr[mid]>target) e = mid-1;
//   else s =mid +1;
//     }
//     return -1;
// }
