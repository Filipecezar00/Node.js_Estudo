const http = require("http")
const porta = process.env.PORT 

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'}) 
    res.end('Estrutura de Servidor Básica') 
})

servidor.listen(porta||3000,()=>{
console.log("Servidor Rodando" +   ( porta || 3000 ) ) 
})