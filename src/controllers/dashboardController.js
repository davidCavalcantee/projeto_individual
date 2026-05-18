var dashboardModel = require("../models/dashboardModel");

function buscarQuizPorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  dashboardModel.buscarQuizPorUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os quiz: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarPorcentagemPorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  dashboardModel.buscarPorcentagemPorUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os quiz: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarPorcentagemRecentePorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  dashboardModel.buscarPorcentagemRecentePorUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os quiz: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function buscarKpiRanking(req, res) {
  var idUsuario = req.params.idUsuario;

  dashboardModel.buscarKpiRanking(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os quiz: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var acertos = req.body.acertos;
  var idUsuario = req.body.idUsuario;

  if (acertos == undefined) {
    res.status(400).send("acertos está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    dashboardModel.cadastrar(acertos, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarKpiRanking,
  buscarPorcentagemRecentePorUsuario,
  buscarPorcentagemPorUsuario,
  buscarQuizPorUsuario,
  cadastrar
}