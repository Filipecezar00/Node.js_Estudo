(async()=>{
const db = require("./aula8")

// const nom = "Gaucho"
// const ida = 22 
// const id = 3
// db.atualizaCliente(id,{nome:nom,idade:ida})
// console.log("cliente " + id +  ' atualizado') 

// await db.insereCliente({nome:'Henrique',idade:'15'})

// console.log("Selecionar todos os Clientes")

const idParaDeletar = 5
console.log("Deletando o Cliente....")
await db.deletarCliente(idParaDeletar)

console.log('cliente ' + idParaDeletar + "deletado")

console.log("Clientes Atuais: ")
const clientes = await db.todosClientes()
console.log(clientes)
})()
