const express = require("express"); 
const app = express(); 
const {engine} = require('express-handlebars')
require("dotenv").config(); 
const Sequelize = require("sequelize"); 

 // Config 
    // Template Engine 
    app.engine("handlebars",engine({defaultLayout:"main"}));
    app.set("view engine",'handlebars');
    app.set("views","./views"); 

//  conexão com o SQL
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "mysql"
    }
); 
app.get("/cad",(req,res)=>{
    res.render("formulario");
})
app.listen(8081,()=>{
    console.log("Servidor Rodando em http://localhost:8081"); 
}); 
