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

    const resultado = await dbo.collection(colecao).find(query).toArray()  
    console.log("Cursos Encontrados"); 
    console.log(resultado); 
    
    
   
     const obj = {curso:"Curso de IA",linguagem:"Phyton"} 

     const result = await dbo.collection(colecao).insertOne(obj) 

     console.log("1 Novo curso inserido com o ID: " + result.insertedId)
} catch(erro){
    console.error("Erro na operação: ", erro); 
}finally{
    await client.close() 
}
}

rodar()