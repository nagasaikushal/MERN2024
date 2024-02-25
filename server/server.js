const express = require('express')
const app = express()
const router = require("./router/auth-router.js") 
const connectdb = require("./utils/db.js")
app.use(express.json())

app.use("/api/auth", router);// Corrected path

connectdb().then(()=>{
    app.listen(5000)
    console.log("server running on port 5000")
})