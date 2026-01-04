(async()=>{
const db = require("./aula8")

console.log("Inserir Novo Cliente")
await db.insereCliente({nome:'Pedro',idade:'31'})

console.log("Selecionar todos os Clientes")
const clientes = await db.todosClientes()

console.log(clientes)
})()
