const express = require('express');
const validators = require("./middleware/validator.middleware")
const app = express();
app.use(express.json());
app.post("/register", validators.resgisterValidationRules, (req,res)=>{
    const {username,password} = req.body
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});

module.exports = app;