INSERT INTO usuarios(nome,email,idade) VALUES(
    "Pedro lucas pinho",
    "pedro@teste.com", 
    18 
); 

SELECT * FROM usuarios WHERE idade = 18; 
SELECT * FROM usuarios WHERE nome = "Filipe Cezar"; 
SELECT * FROM usuarios WHERE idade >= 18; 
DELETE FROM usuarios WHERE nome = "icaro josé"; 
UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Gabriel costa"; 