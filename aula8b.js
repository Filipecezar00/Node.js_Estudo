(async()=>{
const db = require("./db")
console.log("Selecionar todos os Clientes")
const clientes = await db.todosClientes()
console.log(clientes)
})()
