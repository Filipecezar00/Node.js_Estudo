const express = require("express"); 
const app = express(); 
const handlebars = require('express-handlebars')
require("dotenv").config(); 
const { type } = require("os");
const Sequelize = require("sequelize"); 

 // Config 
    // Template Engine 
    app.engine("handle-bars",handlebars({defaultLayout:'main'}))
    app.set("view engine",'handlebars')

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

app.listen(8081,function(){
    console.log("Servidor Rodando em http://localhost:8081"); 
}); 
