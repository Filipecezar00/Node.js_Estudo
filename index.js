const express = require("express"); 
const app = express(); 
 
app.get("/",function(req,res){
res.send("Seja bem vindo ao meu app!"); 
})

app.get("/sobre",function(req,res){
    res.send("Minha pagina sobre!");
})

app.get("/blog",function(req,res){
    res.send("Bem vindo ao Meu blog!"); 
})

app.get("/ola/:nome/:cargo/:cor",function(req,res){
    res.send("<h1> Olá "+req.params.nome + "</h1>" +  "<h2> Seu cargo é: " + req.params.cargo + "</h2>" + "<h3> Sua Cor favorita é:  " + req.params.cor + "</h2>"); 
})

app.listen(8081,function(){
    console.log("Servidor Rodando em http://localhost:8081"); 
}); 
