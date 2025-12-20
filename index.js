const express = require("express"); 
const app = express(); 
const {engine} = require('express-handlebars'); 
const bodyParser = require("body-parser"); 
const db = require("./db"); 

const Post = require("./posts"); 

 // Config 
    // Template Engine 
    app.engine("handlebars",engine({defaultLayout:"main"}));
    app.set("view engine",'handlebars');

    // BodyParser 
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

    app.set("views","./views"); 


//  conexão com o S
app.get("/cad",(req,res)=>{
    res.render("formulario");
})

app.post('/add',(req,res)=>{
    res.send("Texto: " + req.body.titulo + "Contéudo: " +req.body.conteudo);  
})

db.sequelize.sync() 
.then(()=>{
    console.log("Tabela Criada"); 
})
.catch(err=>console.log("Erro ao Criar Tabela:" + err))



app.listen(8081,()=>{
    console.log("Servidor Rodando em http://localhost:8081"); 
}); 
