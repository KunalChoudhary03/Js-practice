function myFun(a){
    if(a<0){
        throw new Error('negatiuve number is not allowed');
    }
    else{

    
    let sum = 0;
   let num =  a.toString().split('');
  num.forEach(a => {
     parseInt(a);
     return sum += parseInt(a);
  });
    return sum;
}
}
console.log(myFun(1234));
