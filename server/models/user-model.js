const mongoose = require("mongoose")
const bcrypt =require("bcryptjs")
const jwt = require("jsonwebtoken")
const users = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});

//pre encrypt of password
users.pre('save',async function(next){
const user =this;
if(!user.isModified('password')){
    next();
}
try{
        const salt= await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password ,salt)
        user.password = hash_password;
}catch(error){
    next(error);
}
});

// jwt
users.methods.generateToken = async function(){
try{ //payload
    return jwt.sign({
        userId : this._id.toString(),
        email : this.email,
        isAdmin : this.isAdmin,
    },
    //signature or secret key
    process.env.JWT_SIGNATURE,
    {
        expiresIn:"30d",
    }

    )

}catch(error){
    console.error(error);
}
}

const User = new mongoose.model("User",users);
module.exports = User;