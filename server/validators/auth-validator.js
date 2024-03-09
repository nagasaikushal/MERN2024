const {z} = require("zod");
// creating a object schema
const signup = z.object({
    username:z
    .string({required_error:"name is required"})
    .trim().min(3,{message : "Username should be atleast 3 characters"})
    .max(50,{message : " field should be not more than 50 characters"}),

    email:z
    .string({required_error:"invalid email"})
    .trim().min(3,{message : " Email should be atleast 3 characters"})
    .max(100,{message : " field should be not more than 50 characters"}),

    phone:z
    .string({required_error:"Phone Number is required"})
    .trim().min(1,{message : "Phone Number should be atleast characters 10"})
    .max(15,{message : "phone number cant exceed 10 numbers"}),

    password:z
    .string({required_error:"Password is required"})
    .trim().min(3,{message : "Password length should be atleast characters 8"})
    .max(20,{message : " field should be not more than 50 characters"})
});

module.exports = signup;