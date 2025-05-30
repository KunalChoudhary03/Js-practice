// function stepOne(cb){
//     return new Promise((res,rej)=>{
//         console.log('step 1');
//         res();
//     })
// }
// function stepTwo(cb){
//    return new Promise((res,rej)=>{
//         console.log('step 2');
//         res();
//     })
// }
// function stepThree(cb){
//     return new Promise((res,rej)=>{
//         console.log('step 3');
//         res();
//     })
// }
// // stepOne(()=>{
// //     stepTwo(()=>{
// //         stepThree(()=>{
// //             console.log('all stpes done');
            
// //         });
// //     });
// // });

// stepOne()
// .then(stepTwo)
// .then(stepThree)
// .then(function(){
//     console.log('DOne all steps'); 
// });

// let promise =  new Promise((res,rej)=>{
//     let sucess = false;
//     if(sucess){
//         res("Task completed");
//     }
//     else{
//         rej("Task incomplete");
//     }
// });
// promise
// .then(r => console.log(r))
// .catch(e => console.log(e))



// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let chance = Math.random() <.7;
//             if(chance) res();
//             else rej();
//         },2000);
//     });
// }
// orderFood().then(()=>{
//     console.log('🍕 Pizza delivered!');
// })
// .catch(()=>{
//     console.log('❗Delevery Faild ');
    
// })


// function getUser(){
//     return new Promise((res,rej)=>{
//  setTimeout(() => {
//             res({id:1,name:"kunal"})
//         }, 1000);
//     });
// }
// function getPosts(userId){
//     return new Promise((res,rej)=>{
//        setTimeout(() => {
//            res(["title 1", "title 2"]);
//        }, 1000);
//     });
// }
// function getComments(userName) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(["Great post!", "Thanks for sharing!"]);
//         }, 1000);
//     });
// }
// getUser()
// .then((data)=>{
//     console.log(`data fetched : ${data.name}`);
//     return getPosts(data.id);
// })
// .then((titles)=>{
//     console.log(titles);
//    return getComments("kunal");
// })
// .then((cmts)=>{
//   console.log(cmts);
// })
// .finally(()=>{
//     console.log('all data fetched');
    
// })

// function getUser(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res({id:1,name:"kunal"});
//         },1000);
//     })
// }
// function getPosts(userId){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(["title1","titile2"]);
//         }, 1000);
//     })
// }
// function getComments(postId){
//     return new Promise ((res,rej)=>{
//         setTimeout(() => {
//             res(["Great post!", "Thanks for sharing!"])
//         }, 1000);
//     });
// }

// getUser()
// .then((data)=>{
//      console.log(`data fetched : ${data.name}`);
//      return getPosts(data.id);
// })
// .then((titles)=>{
//  console.log(titles);
//  return getComments("Kunal");
// })
// .then((cmts)=>{
// console.log(cmts);

// })
// .finally(()=>{
//     console.log('all data fetched');
// })

// const fakeApiCall = (end)=>{
//     const data = {
// user : ["kunal","Ram","Shyam"],
// posts : ["hey","cooking","good","with","harsh" , "bhaiya"]
//     }
//     let delay = Math.random() * 2000 + 1000;
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(data[end]);
        
//         }, delay);
//     })
// }
// fakeApiCall("posts")
// .then((data)=>{
// console.log(data);
// })
// fakeApiCall("user")
// .then((data)=>{
// console.log(data);
// })


// const fetchUserData = ()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res({ id: 101, name: "Kunal" });
//         }, 2000);
//     });
// };
// const fetchOrders = (userId)=>{
//     return new Promise((res,rej)=>{
// setTimeout(() => {
//      res(["Order 1", "Order 2", "Order 3"]);
//     }, 1500);
//     });
    
// };
// fetchUserData()
// .then((user)=>{
//     console.log(user);
//     return fetchOrders(user.id);
// })
// .then((orders)=>{
//     console.log(orders);
// })
// .finally(()=>{
//     console.log("all data is fetched");
// })