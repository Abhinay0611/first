require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT ||  5000
app.use(express.json())

app.get("/",(req,res)=>{
  res.send("hello")
})
app.get("/home",(req,res)=>{
  res.send("Home")
})
app.get("/About",(req,res)=>{
  res.send("About")
})
app.post("/api",async (req,res)=>{
  const data = await req.body
  res.status(201).json({hello:data,msg:"qwertyuioasdfghjkl"})
})

app.listen(port,()=>{
console.log("server running");

})