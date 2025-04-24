
let prompt = require("prompt-sync")();
let arr = new Array(4);
for(let i=0;i<arr.length;i++) {
    let size = Number(prompt("inner array's size"));
    arr[i] = new Array(size);
}
for(let i=0;i<arr.length;I++){
    for(let j=0;j<arr[i].length;j++){
        arr[i][j] = Number(prompt("Enter Array element"));
    }
}