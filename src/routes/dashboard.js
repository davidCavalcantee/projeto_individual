var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/:idUsuario", function (req, res) {
  dashboardController.buscarQuizPorUsuario(req, res);
});

router.get("/porcentagem/:idUsuario", function (req, res) {
  dashboardController.buscarPorcentagemPorUsuario(req, res);
});

router.get("/porcentagemRecente/:idUsuario", function (req, res) {
  dashboardController.buscarPorcentagemRecentePorUsuario(req, res);
});

router.get("/ranking/:idUsuario", function (req, res) {
  dashboardController.buscarKpiRanking(req, res);
});

router.post("/cadastrar", function (req, res) {
  dashboardController.cadastrar(req, res);
})

module.exports = router;