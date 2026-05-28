CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(100),
senha VARCHAR(45)
);

 CREATE TABLE quiz (
  idQuiz INT PRIMARY KEY AUTO_INCREMENT,
  acertos INT,
  fkUsuario INT,
  CONSTRAINT ckFkUsuario FOREIGN KEY (fkUsuario) REFERENCES
  usuario(id)
  );
  
  select  idQuiz as Tentativas, acertos,nome  from quiz join usuario on usuario.id = fkUsuario where id = 1 HAVING acertos order by idQuiz;

select nome, IFNULL(CONCAT(ROUND(MAX(acertos*100/10), 0),'%'),'Ainda não fez nenhuma tentativa') as 'Porcentagem de Acertos' 
from quiz right join usuario on quiz.fkUsuario = usuario.id group by id;

select idQuiz,nome, CONCAT(ROUND(acertos*100/10, 0),'%') as 'porcentagemDeAcertos' 
from quiz join usuario on quiz.fkUsuario = usuario.id where fkUsuario = 4 group by idQuiz  order by idQuiz DESC LIMIT 1;

select  COUNT(idQuiz), MAX(acertos) as acertos,nome  from quiz join usuario on usuario.id = fkUsuario where acertos  GROUP BY id order by acertos desc; 


SELECT 
     COUNT(*) AS posicao 
FROM (
    SELECT fkUsuario, MAX(acertos) AS maiorAcerto
    FROM quiz
    GROUP BY fkUsuario
) AS ranking
WHERE maiorAcerto > (
    SELECT MAX(acertos)
    FROM quiz
    WHERE fkUsuario = 14
);