require("dotenv").config(); 
const { type } = require("os");
const Sequelize = require("sequelize"); 
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "mysql"
    }
); 
sequelize.authenticate().then(function(){
    console.log("Conectado, com Sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar"+erro) 
})

const Postagem = sequelize.define("postagens",{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT 
    }
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING 
    }, 
    sobrenome:{
        type:Sequelize.STRING
    }, 
    idade:{
        type:Sequelize.INTEGER 
    }, 
    email:{
        type:Sequelize.STRING 
    }
})
Usuario.create({
    nome:"VICTOR",
    sobrenome:"vieira", 
    idade:18, 
    email:"victor@gmail.com"
})