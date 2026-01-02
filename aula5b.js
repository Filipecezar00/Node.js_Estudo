const express = require("express")
const app = express() 
const porta = process.env.PORT 

app.get('/',(req,res)=>{
    res.send('SERVIDOR COM EXPRESS')
})
app.get("/linguagem",(req,res)=>{
    res.json({linguagem:"Node js com Javascript"}) 
})

app.listen(porta||3000,()=>{
    console.log("Servidor com Express Rodando"); 
})