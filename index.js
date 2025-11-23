import 'dotenv/config'
import { GoogleGenerativeAI } from "@google/generative-ai";
import promptSync from "prompt-sync";
const prompt = promptSync();
const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main(message) {
  const model  =  ai.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: `
      You are a helpful AI assistant.
      Always respond in **maximum 150 words**.
      Keep answers simple, clear and beginner-friendly.Tell me how can i help you!!😊.
    `
  });
 const response = await model.generateContent(`${message}`);
 console.log(response.response.text());

}
async function lopping(){
   while(true){
     let ask = prompt("Enter text :-")
  if(ask.toLowerCase() =="exit"){
   console.log("Byee!!!");
   break;
  }
   await main(`${ask}`);
 }
}
lopping();

// Instruction
// package you need to install :---
// npm init -y 
// npm i express dotenv
// npm i @google/generative-ai
//npm i prompt-sync
// To run the code in terminal use node index.js
// create a file name it  .env and add variable name GEMINI_API_KEY=<YOUR_API_KEY>

