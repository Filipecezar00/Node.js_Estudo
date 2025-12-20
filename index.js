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
    
    app.set("views","./views"); 

    // BodyParser 
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());


app.get("/",function(req,res){
Post.findAll({raw:true})
.then(posts=>{
    res.render('home',{posts}); 
})
}); 

//  conexão com o SQL
app.get("/cad",(req,res)=>{
    res.render("formulario");
})

app.post('/add',(req,res)=>{
console.log(req.body); 
Post.create({
    titulo:req.body.titulo , 
    conteudo:req.body.conteudo
    }).then(()=>{
        res.redirect('/')
    }).catch((erro)=>{
        res.send("Houve um ERRO " + erro) 
    });
});

db.sequelize.sync() 
.then(()=>{
    console.log("Tabela Criada"); 
})
.catch(err=>console.log("Erro ao Criar Tabela:" + err))

app.listen(8081,()=>{
    console.log("Servidor Rodando em http://localhost:8081"); 
}); 
