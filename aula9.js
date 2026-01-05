const http= require('http'); 
const eventos  = require("events"); 
const EventoEmissor = new eventos.EventEmitter() 
const fim=()=>{
    console.log("Fim do Processo")
}
EventoEmissor.on('msg',()=>{
console.log("Curso de Node") 
})
EventoEmissor.on("fim",fim) 

const porta = process.env.PORT ||3000
const retorno=()=>{console.log("Servidor Rodando")}; 

const servidor = http.createServer((req,res)=>{
    EventoEmissor.emit('msg')
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('Servidor no Ar'); 
    EventoEmissor.emit('fim')
    res.end() 
})

servidor.listen(porta,retorno) 