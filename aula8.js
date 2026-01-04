const conectar = async ()=>{
    if(global.conexao && global.conexao.state !="disconnected"){
        return global.conexao
    }
    const mysql = require("mysql2/promise")
    const con = mysql.createConnection("mysql://root:Filipe@22@localhost:3306/node_estudo")
    console.log("conectou com o banco")
    global.conexao = con 
    return con 
}
const todosClientes = async()=>{
    const com = await conectar()
    const [linhas] = await con.query('SELECT * FROM cliente_node')
    return await linhas 
}
module.exports = {todosClientes}