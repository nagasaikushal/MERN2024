const User = require("../models/user-model")
const bcrypt = require("bcryptjs")
const home =async(req,res)=>{
    try{
       res.status(200)
        res.send("updated routes using other fun from controllers")

    }catch(error){
        console.log(error);
    }
}

const register =async(req,res)=>{
    try{
        const {username , email , phone , password } = req.body;
        const User_Exists = await User.findOne({email})
        if(User_Exists){
            return res.status(400).json({msg : "User already exists on thsi mail . Please Login"})
        }
        // hash of pwd


        const User_Created = await User.create({username , email , phone , password,});
        res.status(200).json({msg :"REgistration Sucessfull",
         token: await User_Created.generateToken(),
         userId: User_Created._id.toString(),});
        console.log({msg : User_Created})

    }catch(error){
        console.log(error);
    }
}
// login logic
const login = async(req,res)=>{
    try{
        const {email , password} = req.body;
        const UserExist = await User.findOne({email})
        console.log(UserExist)
        if(!UserExist){
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const user =await bcrypt.compare(password ,UserExist.password )

        if(user){
            res.status(200).json({msg :"login sucessful", 
            token: await UserExist.generateToken(),
            userId: UserExist._id.toString(),});
        }else{
            res.status(401).json({message:"Invalid Email or Password"})
        }


    }catch(error){
        res.status(500).console.log("internal server error");
    }
}

module.exports ={home , register , login};