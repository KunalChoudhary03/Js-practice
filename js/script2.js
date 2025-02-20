// Grade Calculator — Ask the user for their marks (0-100).
// Assign grades based on the range:
// 90-100: A
// 80-89: B
// 70-79: c
// 60-69: D
// Below 60: F

// let a = prompt("Enter your marks");
// if(a>=90 && a<=100){
//     alert("A");
// }
// else if(a>=80 && a<=89){
//     alert("B");
// }
// else if(a>=70 && a<=79){
//     alert("C");
// }
// else if(a>=60 && a<=69){
//     alert("D");
// }
// else if(a<=59){
//     alert("F")
// }

// Simple Login System — Set a predefined username and
// password. Ask the user to enter their credentials using
// prompt(). If correct, print "Login Successful"; otherwise, print
// "Incorrect username or password."

// let username = "Kunal";
// let pass = "9999";
// let a = prompt("Enter you username");
// let b =  prompt("Enter your password");
// if(a === username && b === pass){
//     alert("Login Sucessfull");
// }
// else{
//     alert("Please enter a correct username and password");
// }

// Swapping Without Third Variable — Take two numbers from the
// user and swap their values without using a third variable.
// let a = 5;
// let b = 10;

// console.log("a  before is " + a);
// console.log( "b  before is " + b);

// a = a+b; //15
// b = a-b; // 15-10 = 5
// a = a-b;  // 5 - 15 = 10 

// console.log("a after is " + a);
// console.log( "b  after is " + b);



// FizzBuzz (Multiple of Both) - Ask the user for a number. If it's a
// multiple of both 3 and 5, print "FizzBuzz"; if only 3, print "Fizz"; if
// only 5, print "Buzz"; otherwise, print the number itself.
// let a = prompt("Enter a number");
// if(a% 3 ==0 && a%5 == 0){
//     alert("fizzbuzz");
// }
// else if(a%3==0){
//     alert("fizzz");
// }
// else if(a%5==0){
//     alert("buzz");
// }
// else{
//     alert(a);
// }


// Number Reversal - Take a three-digit number from the user
// and print its reverse. (Example: 123 321).

// let a = prompt("Enter maximum three digit number");
// let ans = a.toString().split("").reverse().join("");
// alert(ans);

// Sum of Digits Take a number from the user and print the sum
// of its digits. (Example: 123 1+2+3 = 6).
// let a  = prompt("Enter any number");
//   let total = 0;
//   let ans = a.toString().split('');
//   ans.forEach(element => {
// total += parseInt(element);
// return total;
//   });
//   alert(total);


// Palindrome Checker - Ask the user for a word. Check if it
// reads the same forward and backward. Print "Palindrome" or
// "Not a Palindrome."
// let a = prompt("Enter a word");
// let ans =  a.toString().split('').reverse().join('');
// if(a === ans){
//   alert('Palindrome');
// }
// else{
//   alert("Not a Palindrome");
// }


// 22 . Nested Condition Challenge - Ask the user for their age and
// salary. Print a message based on conditions:
// If age is below 18, print "Not eligible"
// If age is 18 or more but salary is less than *20,000, print "Low
// Salary"
// If salary is or more, print "High Salary"
// Otherwise, print "Medium Salary"

// let a = prompt("Enter your age");
//         let sal = prompt("Enter your salary");
//         if(a<18){
//             alert("Not eligible");
//         }
//         else if(a>=18 && sal <=20000){
//   alert("low salary");
//         }
//         else if(a>=18 && sal>=50000){
//      alert("high salary");
//         }
//         else{
//             alert("medium salary");
//         }


// Convert Number to Words - Take a single-digit number and
// print it in words (Example: 1 One, 2 Two).

// let a = prompt("Enter a single-digit number");
// let arr = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
// a = parseInt(a); 
// if (a >= 0 && a <= 9) {
//     alert(arr[a]);
// } else {
//     alert("Please provide a single-digit number.");
// }


// checked on html file then pasted here