require("dotenv").config(); 
const {MongoClient,ObjectId} = require("mongodb") 
const url = process.env.MONGO_URL 
const client = new MongoClient(url); 

async function rodar(){
try{
    await client.connect() 
    console.log("Conectado ao Banco de Dados"); 

    const colecao = 'Cursos'; 
    const dbo = client.db("Cursos")
    const query = {linguagem:/.t/} 

    //  const obj = [
    //     {curso:"Curso front end enginner",linguagem:"Javascript"}, 
    //     {curso:"Curso front end enginner",linguagem:"Javascript"}, 
    //     {curso:"Curso front end enginner",linguagem:"Javascript"} 
    //  ]
    //  const result = await dbo.collection(colecao).insertMany(obj) 
    //  console.log("Novos Cursos inseridos" + result.insertedCount)

    // const resultado = await dbo.collection(colecao).find(query).toArray()  
    // console.log("Cursos Encontrados"); 
    // console.log(resultado); 

    //  const deleteId = '695e63e28521611aa4be7801'
    //  const deleteResult = await dbo.collection(colecao).deleteOne({
    //     _id: new ObjectId(deleteId) 
    //  })
    //  console.log(`${deleteResult} Dado Deletado!`)

    // const queryDelete = {linguagem:'Javascript'};
    // const resultMany = await dbo.collection(colecao).deleteMany(queryDelete) ;
    // console.log(`${resultMany.deletedCount} Todos os Cursos de JavaScript foram Removidos`); 

     const ordenacao = {curso:1}
     const query2 = {}
     const queryanswer = await dbo.collection(colecao).find(query2).sort(ordenacao).toArray()

     console.log("------------- Lista de cursos em ordem alfabetica -------------")
     console.table(queryanswer)
      
     let query3 = {curso:/.t/}; 
     let novoObj = { $set: {curso:'Curso de Hardware'}};   
     const queryanswer3 = await dbo.collection(colecao).updateOne(query3,novoObj); 
     console.log(`${queryanswer3.modifiedCount} Curso Devidamente Atualizado`); 

} catch(erro){
    console.error("Erro na operação: ", erro); 
}finally{
    await client.close() 
}
}
rodar()