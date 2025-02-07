// function myFun(a){
//     if(a%2 == 0){
//         console.log("Even");
//     }
//     else{
//         console.log("odd");
//     }
// }
// myFun(5);

function myFun(a,b,c){
    if(a<b && a<c){
        console.log( a, "A is smallest");
    }
    else if(b<a && b<c){
        console.log( b, "B is smallest")
    }
    else if(c<a && c<b){
        console.log( c, "B is smallest")
    }
    else if(a==b && a==c){
        console.log("All are equal");
    }
}
// myFun(33,33,33);
myFun(-1,-6,9);