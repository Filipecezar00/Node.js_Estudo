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
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM cliente_node')
    return linhas 
}
const insereCliente = async(cliente)=>{
    const con = await conectar()
    const sql = 'INSERT INTO cliente_node (nome,idade)  VALUES (?,?); ' 
    const valores = [cliente.nome, cliente.idade] 
    return con.query(sql,valores)  
}
module.exports = {todosClientes,insereCliente} 