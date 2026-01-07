require("dotenv").config(); 
const {MongoClient} = require("mongodb") 
const url = process.env.MONGO_URL 
const client = new MongoClient(url); 

async function rodar(){
try{
    await client.connect() 
    console.log("Conectado ao Banco de Dados"); 

    const colecao = 'Cursos'; 
    const dbo = client.db("Cursos")
    const query = {linguagem:/.t/} 

     const obj = {curso:"Curso Banco de dados",linguagem:"SQL"} 
     const result = await dbo.collection(colecao).insertOne(obj) 
     console.log("1 Novo curso inserido com o ID: " + result.insertedId)

    // const resultado = await dbo.collection(colecao).find(query).toArray()  
    // console.log("Cursos Encontrados"); 
    // console.log(resultado); 
       
     const ordenacao = {curso:1}
     const query2 = {}
     const queryanswer = await dbo.collection(colecao).find(query2).sort(ordenacao).toArray()
     
     console.log("------------- Lista de cursos em ordem alfabetica -------------")
     console.table(queryanswer)

} catch(erro){
    console.error("Erro na operação: ", erro); 
}finally{
    await client.close() 
}
}
rodar()