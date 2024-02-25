require("dotenv").config();
const mongoose = require("mongoose")
const uri =process.env.MONGODB_URI
const connectdb = async()=>{
try {
    await mongoose.connect(uri)
    console.log("connected to atlas")
}catch(error){
    console.error("Database connection failed");
    process.exit(0)
}
}

module.exports = connectdb;
