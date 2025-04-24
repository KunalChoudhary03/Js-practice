// bubble sort 
// let arr = [1,54,3,2,5,6,7,8,9,0];
// let n = arr.length;
//   for (let i=0;i<n-1;i++){
//     for(let j=0;j<n-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp  = arr[j];
//             arr[j] = arr[j+1];      
//             arr[j+1] = temp;
//         }
//     }
//   }
// console.log(arr);

// Selection sort

// let arr = [1,54,3,2,5,6,7,8,9,0];
// let n = arr.length;
// for(let i =0;i<n-1;i++){
//     let small = i
//     for(let j =i+1;j<n;j++){ 
//        if(arr[small]>arr[j]){
//         small = j;
//        }
//     }
//     if(i !=small ){
//         let temp = arr[i];
//         arr[i] = arr[small];
//         arr[small] = temp;  
//     }
// }
// console.log(arr);

// Insertion sort
// let arr = [1,54,3,2,5,6,7,8,9,0];
// let n = arr.length;
// for(let i=1;i<n;i++){
//     let key = arr[i];
//     let j =i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = key;
// }
// console.log(arr);
