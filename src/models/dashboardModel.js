var database = require("../database/config");

function buscarQuizPorUsuario(idUsuario) {

  var instrucaoSql = `select  id, MAX(acertos) as acertos,nome  
  from quiz join usuario on usuario.id = fkUsuario 
  GROUP BY id order by acertos desc;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarPorcentagemPorUsuario(idUsuario) {

  var instrucaoSql = `select CONCAT(ROUND(MAX(acertos*100/10),0),'%') as porcentagemDeAcertos from quiz where fkUsuario = ${idUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarPorcentagemRecentePorUsuario(idUsuario) {

  var instrucaoSql = `select idQuiz,nome, CONCAT(ROUND(acertos*100/10, 0),'%') as 'porcentagemDeAcertos' 
from quiz right join usuario on quiz.fkUsuario = usuario.id where fkUsuario = ${idUsuario} group by idQuiz  order by idQuiz DESC LIMIT 1   ;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarKpiRanking(idUsuario) {

  var instrucaoSql = `SELECT 
     COUNT(*) AS posicao
FROM (
    SELECT fkUsuario, MAX(acertos) AS maiorAcerto
    FROM quiz
    GROUP BY fkUsuario
) AS ranking
WHERE maiorAcerto > (
    SELECT MAX(acertos)
    FROM quiz
    WHERE fkUsuario = ${idUsuario}
);`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idUsuario, acertos) {
  
  var instrucaoSql = `INSERT INTO (fkUsuario, acertos) quiz VALUES (${idUsuario}, ${acertos})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarKpiRanking,
  buscarPorcentagemRecentePorUsuario,
  buscarPorcentagemPorUsuario,
  buscarQuizPorUsuario,
  cadastrar
}
