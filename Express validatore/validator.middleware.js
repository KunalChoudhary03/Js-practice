const { body, query , param , validationResult } = require("express-validator")

function validate(req,res,next){
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  next() 
}

const resgisterValidationRules = [
    body("username")
    .optional()
    .isString().withMessage("Username must be a string")
    .isLength({min:5}).withMessage("Username must be at least 5 characters long"),
    body("email")
    .isLength({min:6}).withMessage("Email must be at least 6 characters long"),
    body("password")
    .isLength({min:8}).withMessage("Password must be at least 8 characters long"),
    validate
]

module.exports = {
    resgisterValidationRules
}