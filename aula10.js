const http = require("http")
const porta = process.env.PORT || 3000 
const formidable = require("formidable")
const fs = require('fs')

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})  
    res.write("<form action='envioDeArquivo' method='post' enctype='multipart/form-data'>")
    res.write('<input type="file" name="fileupload"><br> ' )
    res.write("<input type='submit' value='Enviar'>")  
    res.write("</form>") 
    return res.end()
}) 

servidor.listen(porta)