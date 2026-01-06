const http = require("http")
const porta = process.env.PORT || 3000 
const formidable = require("formidable")
const fs = require('fs')

const servidor = http.createServer((req,res)=>{

    if(req.url=="/envioDeArquivo"){
        const form = new formidable.IncomingForm(); 
        form.parse(req,(erro,campos,arquivos)=>{
            const arquivo = arquivos.fileupload[0]; 
            const urlantiga = arquivo.filepath 
            const urlnova = "C:/Users/User/Desktop/NodeJs/Node.js_Estudo/" + arquivo.originalFilename; 
            fs.rename(urlantiga,urlnova,(erro)=>{
                if(erro){
                console.log("Erro ao Mover:",erro); 
                res.write("Erro ao Processar");  
                return res.end() 
                } 
                res.write('Arquivo Movido!') 
                res.end()
            })
        })
    }else{
    res.writeHead(200,{'Content-Type':'text/html'})  
    res.write("<form action='envioDeArquivo' method='post' enctype='multipart/form-data'>")
    res.write('<input type="file" name="fileupload"><br> ' )
    res.write("<input type='submit' value='Enviar'>")  
    res.write("</form>") 
    return res.end()
    }
    
}) 

servidor.listen(porta)