const express = require("express"); 
const app = express(); 
const {engine} = require('express-handlebars')

const db = require("./db"); 

const Post = require("./posts"); 

 // Config 
    // Template Engine 
    app.engine("handlebars",engine({defaultLayout:"main"}));
    app.set("view engine",'handlebars');
    app.set("views","./views"); 

//  conexão com o SQL

app.get("/cad",(req,res)=>{
    res.render("formulario");
})

db.sequelize.sync() 
.then(()=>{
    console.log("Tabela Criada"); 
})
.catch(err=>console.log("Erro ao Criar Tabela:" + err))



app.listen(8081,()=>{
    console.log("Servidor Rodando em http://localhost:8081"); 
}); 
