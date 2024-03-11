const express = require('express')
const app = express();
const cors = require('cors');
const AuthRouter = require("./router/auth-router.js") 
const ContactRoute = require("./router/contact-router.js")
const connectdb = require("./utils/db.js")
app.use(express.json());
app.use(cors());

app.use("/api/auth", AuthRouter);// Corrected path
app.use("/api/form" , ContactRoute);

app.post('http://localhost:5000/api/auth/reg',(request,response) => {
    response.send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT');
    console.log(request.body)
    col.insertOne(request.body)
    console.log("Documents Inserted");
  
  })
  
  app.post('http://localhost:5000/api/form/contact',(request,response) => {
    response.send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT');
    console.log(request.body)
    col.insertOne(request.body)
    console.log("Documents Inserted");
  
  })
  
connectdb().then(()=>{
    app.listen(5000)
    console.log("server running on port 5000")
});