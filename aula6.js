const express = require("express")
const rotas = require("./rotas/rotas")
const porta = process.env.PORT || 3000 

const app = express()

app.use('/',rotas)
app.get("(.*)",(req,res)=>{
res.status(404).send("curso de node")
})

app.listen(porta,()=>{
    console.log("Rodando em http://localhost:"+porta); 
})


