require("dotenv").config(); 
const {MongoClient,ObjectId} = require("mongodb") 
const url = process.env.MONGO_URL 
const client = new MongoClient(url); 

async function rodar(){
try{
    await client.connect() 
    console.log("Conectado ao Banco de Dados"); 

    const colecao = 'Cursos'; 
    const colecao2 = 'detalhesCursos'
    const dbo = client.db("Cursos")
    const query = {linguagem:/.t/} 

    //  let obj = [
    //     {idcurso:1,curso:"Curso React",linguagem:"Javascript"}, 
    //     {idcurso:2,curso:"Curso Windows",linguagem:"C++"}, 
    //     {idcurso:3,curso:"Curso Java",linguagem:"Java"},
    //     {idcurso:4,curso:"Curso Express.js",linguagem:"Javascript"},
    //     {idcurso:5,curso:"Curso Kotlin",linguagem:"Kotlin"}, 
    //     {idcurso:6,curso:"Angular",linguagem:"Javascript"}
    //  ]
    //  const result = await dbo.collection(colecao).insertMany(obj) 
    //  console.log("Novos Cursos inseridos" + result.insertedCount)

    //  obj=[
    //     {idcurso:1,aulas:40}, 
    //     {idcurso:2,aulas:50}, 
    //     {idcurso:3,aulas:20}, 
    //     {idcurso:4,aulas:35}, 
    //     {idcurso:5,aulas:44}, 
    //     {idcurso:6,aulas:120} 
    //  ]
    //  const result2 = await dbo.collection(colecao2).insertMany(obj)
    //  console.log("Detalhes dos Cursos" + result2.insertedCount)  
        

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

     const queryanswer = await dbo.collection(colecao).aggregate([
        {
            $lookup:{
                from:'detalhesCursos', 
                localField:'idcurso', 
                foreignField:'idcurso', 
                as:'Detalhes'
            }
        },
        {
            $sort:{curso:1} 
        }
     ]).toArray() 

     console.log("------------- Lista de cursos em ordem alfabetica -------------")
     console.dir(queryanswer,{depth:null}); 

     const ordenacao2 = {idcurso:1} 
     const query5 = {}
     const queryanswer2  = await dbo.collection(colecao2).find(query5).sort(ordenacao2).toArray() 
     console.log("----------------------- Detalhes dos Cursos ----------------------")
     console.table(queryanswer2) 
      
//      let query3 = {curso:/.t/}; 
//      let novoObj = { $set: {curso:'Curso de Hardware'}};   
//      const queryanswer3 = await dbo.collection(colecao).updateOne(query3,novoObj); 
//      console.log(`${queryanswer3.modifiedCount} Curso Devidamente Atualizado`); 

// const limite = 3
// const query4 = {}
// const queryanswer4 = await dbo.collection(colecao).find(query4,{projection:{_id:0}}).limit(limite).toArray() 
// console.log("-----------------------Resultados Com Limite----------------------------")
// console.table(queryanswer4); 
// console.log(`Foram Encontrados ${queryanswer4.length} itens (Limite máximo: ${limite})`);

} catch(erro){
    console.error("Erro na operação: ", erro); 
}finally{
    await client.close() 
}
}
rodar()