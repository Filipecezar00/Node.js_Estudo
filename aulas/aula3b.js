const http = require("http"); 
const url = require("url")
const porta = 3000; 
const host = "127.0.0.1"; 

const servidor = http.createServer((req,res)=>{
res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"}); 
res.write("http://localhost:3000/:" + req.url + "<br>"); 
const p = url.parse(req.url,true).query
if(p.nome){
    res.write("Nome: " + p.nome + "<br>")
} 
if(p.curso){
    res.write("Curso: " + p.curso + "<br>") 
}
res.end()
});
servidor.listen(porta,host,()=>{
    console.log("Servidor Rodando em http://127.0.0.1:3000"); 
})